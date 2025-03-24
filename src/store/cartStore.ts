import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface CartItem {
  id: string;
  restaurant_id: number;
  item_id: number;
  quantity: number;
  price: number;
  name: string;
}

interface CartStore {
  items: CartItem[];
  loading: boolean;
  fetchCart: () => Promise<void>;
  addToCart: (item: Omit<CartItem, 'id'>) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  clearCart: () => Promise<void>;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  loading: false,

  fetchCart: async () => {
    set({ loading: true });
    const { data: items, error } = await supabase
      .from('cart_items')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching cart:', error);
      return;
    }

    set({ items: items || [], loading: false });
  },

  addToCart: async (item) => {
    set({ loading: true });
    
    // Check if item already exists in cart
    const existingItem = get().items.find(
      (i) => i.item_id === item.item_id && i.restaurant_id === item.restaurant_id
    );

    if (existingItem) {
      // Update quantity if item exists
      const { error } = await supabase
        .from('cart_items')
        .update({ quantity: existingItem.quantity + 1 })
        .eq('id', existingItem.id);

      if (error) {
        console.error('Error updating cart item:', error);
        set({ loading: false });
        return;
      }
    } else {
      // Insert new item if it doesn't exist
      const { error } = await supabase
        .from('cart_items')
        .insert([item]);

      if (error) {
        console.error('Error adding to cart:', error);
        set({ loading: false });
        return;
      }
    }

    // Refresh cart
    await get().fetchCart();
    set({ loading: false });
  },

  updateQuantity: async (itemId: string, quantity: number) => {
    set({ loading: true });

    if (quantity <= 0) {
      await get().removeFromCart(itemId);
      return;
    }

    const { error } = await supabase
      .from('cart_items')
      .update({ quantity })
      .eq('id', itemId);

    if (error) {
      console.error('Error updating quantity:', error);
      set({ loading: false });
      return;
    }

    await get().fetchCart();
    set({ loading: false });
  },

  removeFromCart: async (itemId: string) => {
    set({ loading: true });

    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('id', itemId);

    if (error) {
      console.error('Error removing from cart:', error);
      set({ loading: false });
      return;
    }

    await get().fetchCart();
    set({ loading: false });
  },

  clearCart: async () => {
    set({ loading: true });

    const { error } = await supabase
      .from('cart_items')
      .delete()
      .neq('id', '');

    if (error) {
      console.error('Error clearing cart:', error);
      set({ loading: false });
      return;
    }

    set({ items: [], loading: false });
  },
}));