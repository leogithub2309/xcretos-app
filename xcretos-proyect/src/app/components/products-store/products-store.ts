import { Component, input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-products-store',
  imports: [],
  templateUrl: './products-store.html',
  styleUrl: './products-store.css',
})
export class ProductsStore implements OnInit{
  
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
    this.renderProducts();
    this.updateCartUI();
  }

  renderProducts() {
        const container: any = document.getElementById('product-container');
        container.innerHTML = this.PRODUCTS.map((product: any, index: number) => `
            <div class="glass-card rounded-2xl p-4 flex flex-col animate-card" style="animation-delay: ${index * 0.1}s">
                <div class="relative h-60 rounded-xl bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center mb-4 overflow-hidden group">
                    <span class="text-7xl group-hover:scale-110 transition-transform duration-500">${product.image}</span>
                    <div class="absolute top-3 left-3 category-badge px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">
                        ${product.category}
                    </div>
                </div>
                <div class="flex-grow">
                    <h3 class="text-lg font-semibold mb-1 text-white/90">${product.title}</h3>
                    <div class="text-[#F7E06A] font-bold text-xl mb-4">$${product.price.toLocaleString()}</div>
                </div>
                <button 
                    (click)="${() => this.addToCart(product.id, Event)}" 
                    class="gold-button w-full py-3 rounded-xl flex items-center justify-center gap-2 group"
                >
                    <span>Agregar</span>
                    <span class="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>
        `).join('');
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

    addToCart(productId: any, event: any) {
        const product: any = this.PRODUCTS.find((p: any) => p.id === productId);
        this.cart.push(product);
        this.updateCartUI();
        
        // Efecto visual de feedback
        const btn = event.currentTarget;
        const originalText = btn.innerHTML;
        btn.innerHTML = '¡Añadido! ✨';
        btn.classList.replace('gold-button', 'bg-green-500');
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.replace('bg-green-500', 'gold-button');
        }, 1000);
    }

}
