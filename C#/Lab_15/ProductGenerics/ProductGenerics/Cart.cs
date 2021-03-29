using System;
using System.Collections.Generic;
using System.Text;

namespace ProductGenerics
{
    class Cart<T>
    {
        T[] cartItems;
        private int itemSpaceLeft = 0;
        private int cartSize;

        public int Size{
            get => cartSize-itemSpaceLeft;
            }


        public Cart()
        {
            cartItems = new T[5];
            cartSize = 5;
        }
        public Cart(int size)
        {
            cartItems = new T[size];
            cartSize = size;
        }

        public void Add(T item)
        {
            if(itemSpaceLeft<cartSize)
            {
                cartItems[itemSpaceLeft++] = item;
            }
        }

        public T this[int index]
        {
            get
            {
                return cartItems[index];
            }

            set
            {
                cartItems[index] = value;
            }
        }

    }
}
