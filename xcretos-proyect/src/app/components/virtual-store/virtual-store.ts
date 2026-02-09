import { Component, OnInit } from '@angular/core';
import { MenuStore } from "../menu-store/menu-store";
import { ProductsStore } from "../products-store/products-store";

@Component({
  selector: 'app-virtual-store',
  imports: [MenuStore, ProductsStore],
  templateUrl: './virtual-store.html',
  styleUrl: './virtual-store.css',
})
export class VirtualStore implements OnInit{

  public PRODUCTS: any = [
        { id: 1, title: 'Auriculares Onyx', price: 299.99, category: 'Audio', image: '🎧' },
        { id: 2, title: 'Reloj Stellar', price: 549.50, category: 'Wearables', image: '⌚' },
        { id: 3, title: 'Cámara Lumix G', price: 1200.00, category: 'Fotografía', image: '📷' },
        { id: 4, title: 'Silla ErgoGold', price: 890.00, category: 'Oficina', image: '💺' },
        { id: 5, title: 'Monitor Curvo 4K', price: 750.00, category: 'Gaming', image: '🖥️' },
        { id: 6, title: 'Teclado Mecánico', price: 180.00, category: 'Accesorios', image: '⌨️' },
        { id: 7, title: 'Drone SkyMaster', price: 1500.00, category: 'Drones', image: '🛸' },
        { id: 8, title: 'Tablet Pro Plus', price: 950.00, category: 'Mobile', image: '📱' }
  ];

  public cart: any[] = [];

  
  ngOnInit(): void {
  }

  updateCartUI() {
        // Actualizar contador (Signal notify)
        const carCount: any = document.getElementById('cart-count'),
          cartTotal: any = document.getElementById('cart-total');
        carCount.innerText = this.cart.length;

        // Actualizar lista
        const cartContainer: any = document.getElementById('cart-items');
        if (this.cart.length === 0) {
            cartContainer.innerHTML = '<p class="text-gray-500 text-center py-10 italic">Tu carrito está vacío</p>';
        } else {
            cartContainer.innerHTML = this.cart.map((item, index) => `
                <div class="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/5">
                    <span class="text-3xl">${item.image}</span>
                    <div class="flex-grow">
                        <h4 class="font-bold text-sm">${item.title}</h4>
                        <p class="text-[#F7E06A] text-xs font-mono">$${item.price.toLocaleString()}</p>
                    </div>
                    <button onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-300">✕</button>
                </div>
            `).join('');
        }

        // Actualizar Total
        const total = this.cart.reduce((sum: any, item: any) => sum + item.price, 0);

        cartTotal.innerText = `$${total.toLocaleString()}`;
    }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    this.updateCartUI();
  }

    
  toggleCartModal() {
    const modal: any = document.getElementById('cart-modal');
    modal.classList.toggle('hidden');
  }

  checkout() {
    if (this.cart.length === 0) return alert("El carrito está vacío.");
      alert("🎉 ¡Pedido procesado con éxito!\nGracias por comprar en Maestro Store.");
      this.cart = [];
      this.updateCartUI();
      this.toggleCartModal();
  }



}
