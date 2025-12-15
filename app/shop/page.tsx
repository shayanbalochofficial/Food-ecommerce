"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCart } from "@/context-cart/CartContext";
import { toast } from "sonner";
import { Plus, Minus, Trash2 } from "lucide-react";

export default function Shop() {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    cvv: "",
    expiry: "",
  });

  if (items.length === 0 && !showCheckout) {
    return (
      <div className="pt-20 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-foodbuck-gray-muted mb-8 text-lg">
            Add items from our menu to get started
          </p>
          <Link href="/menu">
            <Button className="bg-foodbuck-orange hover:bg-foodbuck-orange/90 text-foodbuck-black">
              Explore Menu
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.cardNumber ||
      !formData.cvv ||
      !formData.expiry
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.cardNumber.length !== 16) {
      toast.error("Card number must be 16 digits");
      return;
    }

    toast.success("Payment Successful!");
    clearCart();
    setShowCheckout(false);
    window.location.href = "/thank-you";
  };

  return (
    <div className="pt-20 pb-20">
      <div className="bg-foodbuck-black-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-bold text-white mb-4">
            Shopping <span className="text-foodbuck-orange">Cart</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-foodbuck-black-card rounded-2xl border border-foodbuck-black-surface p-6 flex gap-6"
                >
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {item.name}
                    </h3>
                    <p className="text-foodbuck-orange font-bold text-lg mb-4">
                      ${item.price.toFixed(2)} each
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="w-3 h-3 text-foodbuck-black" />
                        </Button>
                        <span className="text-white font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="w-3 h-3 text-foodbuck-black" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="text-right flex flex-col justify-between">
                    <span className="text-white font-bold text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-foodbuck-black-card rounded-2xl border border-foodbuck-black-surface p-8 sticky top-24">
              <h2 className="text-white font-bold text-2xl mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-8 pb-8 border-b border-foodbuck-black-surface">
                <div className="flex justify-between text-foodbuck-gray-muted">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-foodbuck-gray-muted">
                  <span>Tax (10%)</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-white font-bold text-xl mb-8">
                <span>Total</span>
                <span className="text-foodbuck-orange">
                  ${(total * 1.1).toFixed(2)}
                </span>
              </div>

              <Button
                onClick={() => setShowCheckout(true)}
                className="w-full bg-foodbuck-orange hover:bg-foodbuck-orange/90 text-foodbuck-black font-semibold py-6"
              >
                Proceed to Checkout
              </Button>

              <Link href="/menu">
                <Button
                  variant="outline"
                  className="w-full mt-4 t  ext-foodbuck-black"
                >
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="bg-foodbuck-black-card border-foodbuck-black-surface">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl">Checkout</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleCheckoutSubmit} className="space-y-4">
            <div>
              <label className="text-foodbuck-gray-muted text-sm">
                Full Name
              </label>
              <Input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-foodbuck-black border-foodbuck-black-surface text-white mt-1"
              />
            </div>

            <div>
              <label className="text-foodbuck-gray-muted text-sm">Email</label>
              <Input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-foodbuck-black border-foodbuck-black-surface text-white mt-1"
              />
            </div>

            <div>
              <label className="text-foodbuck-gray-muted text-sm">
                Card Number (16 digits)
              </label>
              <Input
                type="text"
                placeholder="1234567890123456"
                maxLength={16}
                value={formData.cardNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    cardNumber: e.target.value.replace(/\D/g, ""),
                  })
                }
                className="bg-foodbuck-black border-foodbuck-black-surface text-white mt-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-foodbuck-gray-muted text-sm">CVV</label>
                <Input
                  type="text"
                  placeholder="123"
                  maxLength={3}
                  value={formData.cvv}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      cvv: e.target.value.replace(/\D/g, ""),
                    })
                  }
                  className="bg-foodbuck-black border-foodbuck-black-surface text-white mt-1"
                />
              </div>
              <div>
                <label className="text-foodbuck-gray-muted text-sm">
                  Expiry (MM/YY)
                </label>
                <Input
                  type="text"
                  placeholder="12/25"
                  maxLength={5}
                  value={formData.expiry}
                  onChange={(e) =>
                    setFormData({ ...formData, expiry: e.target.value })
                  }
                  className="bg-foodbuck-black border-foodbuck-black-surface text-white mt-1"
                />
              </div>
            </div>

            <div className="flex justify-between gap-4 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowCheckout(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-foodbuck-orange hover:bg-foodbuck-orange/90 text-foodbuck-black font-semibold"
              >
                Complete Payment
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
