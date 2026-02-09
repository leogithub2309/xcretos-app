import { Component,  ElementRef,  viewChildren } from '@angular/core';

@Component({
  selector: 'app-menu-store',
  imports: [],
  templateUrl: './menu-store.html',
  styleUrl: './menu-store.css',
})
export class MenuStore {

  cartModal = viewChildren<ElementRef>('cartModal');

  toggleCartModal() {
    this.cartModal().forEach(elRef => {
      elRef.nativeElement.classList.toggle('hidden');
    });
  }

  checkout() {
    alert("🎉 ¡Pedido procesado con éxito!\nGracias por comprar en Maestro Store.");
    //if (this.cart.length === 0) return alert("El carrito está vacío.");
    //this.cart = [];
    //this.updateCartUI();
    //this.toggleCartModal();
  }

}
