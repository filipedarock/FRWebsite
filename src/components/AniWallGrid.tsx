import { useState } from 'react';
import { FRAME_PRODUCTS, PHONE_PRODUCTS } from '@/data/aniwall-products';
import { AniWallProduct } from '@/data/types';
import { ChevronLeft, ChevronRight, X, ShoppingCart, MessageSquare, Smartphone, Frame } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AniWallGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState<AniWallProduct | null>(null);
  const { t } = useLanguage();

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column — Frames / Posters */}
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted-foreground mb-4 flex items-center gap-2">
              <Frame className="w-3.5 h-3.5" />
              {t('aniwall.frames_title')}
            </h3>
            <div className="grid grid-cols-2 gap-1 md:gap-2">
              {FRAME_PRODUCTS.map((product) => (
                <ProductGridItem
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          </div>

          {/* Right column — Phone Cases */}
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted-foreground mb-4 flex items-center gap-2">
              <Smartphone className="w-3.5 h-3.5" />
              {t('aniwall.phones_title')}
            </h3>
            <div className="grid grid-cols-2 gap-1 md:gap-2">
              {PHONE_PRODUCTS.map((product) => (
                <ProductGridItem
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedProduct && (
        <AniWallModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

const ProductGridItem = ({
  product,
  onClick,
}: {
  product: AniWallProduct;
  onClick: () => void;
}) => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div
      className="relative aspect-square overflow-hidden cursor-pointer group bg-muted"
      onClick={onClick}
    >
      <img
        src={product.images[currentImg]}
        alt={product.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {product.images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {product.images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrentImg(i); }}
              className={`w-2 h-2 rounded-full transition-all shadow-sm ${
                i === currentImg ? 'bg-white scale-125 shadow-md' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      )}

      {product.images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); setCurrentImg(i => i === 0 ? product.images.length - 1 : i - 1); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setCurrentImg(i => (i + 1) % product.images.length); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <div>
          <h3 className="text-white text-sm md:text-base font-bold">{product.title}</h3>
          <p className="text-white/70 text-[10px] md:text-xs">{product.subtitle}</p>
          <p className="text-white/90 text-[10px] md:text-xs font-semibold mt-1">
            {product.productType === 'phone'
              ? `${product.phonePrice}€`
              : `${product.digitalPrice}€`}
          </p>
        </div>
      </div>
    </div>
  );
};

const AniWallModal = ({
  product,
  onClose,
}: {
  product: AniWallProduct;
  onClose: () => void;
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleWhatsAppOrder = (label: string) => {
    const msg = encodeURIComponent(
      `Olá! Gostaria de encomendar "${product.title}" — ${label}.`
    );
    window.open(`https://wa.me/${product.whatsappNumber}?text=${msg}`, '_blank');
  };

  const handleDigitalPurchase = () => {
    alert('Stripe checkout em breve!');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-background/95 animate-modal-in">
      <div className="max-w-5xl w-full max-h-[95vh] overflow-y-auto relative shadow-2xl bg-card border border-border">
        <button
          onClick={onClose}
          className="fixed top-8 right-8 transition-all hover:scale-125 z-[110] text-muted-foreground hover:text-foreground"
        >
          <X className="w-6 h-6" strokeWidth={1} />
        </button>

        <div className="flex flex-col lg:flex-row p-6 md:p-10 lg:p-16 gap-8 lg:gap-16">
          {/* Slideshow */}
          <div className="w-full lg:w-3/5 relative">
            <img
              src={product.images[currentImg]}
              alt={`${product.title} - ${currentImg + 1}`}
              className="w-full h-auto shadow-xl"
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImg(i => i === 0 ? product.images.length - 1 : i - 1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentImg(i => (i + 1) % product.images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="flex gap-2 mt-4 justify-center">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImg(i)}
                      className={`w-16 h-16 overflow-hidden border-2 transition-all ${
                        i === currentImg ? 'border-foreground' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Info + Purchase */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted-foreground mb-2">
              ANIWALL
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-2 text-foreground">
              {product.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-6">{product.subtitle}</p>
            <p className="mb-8 leading-relaxed font-light text-base text-muted-foreground">
              {product.description}
            </p>

            {product.productType === 'frame' && (
              <>
                {/* Digital Print — €2 */}
                <div className="mb-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3 text-foreground">
                    {t('aniwall.digital_image')}
                  </h4>
                  <button
                    onClick={handleDigitalPurchase}
                    className="w-full py-3 text-center text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 bg-foreground text-background hover:opacity-80"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {t('aniwall.buy_digital')} — {product.digitalPrice}€
                  </button>
                </div>

                {/* Frame Sizes — WhatsApp */}
                <div className="mb-8">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3 text-foreground">
                    {t('aniwall.framed_print')}
                  </h4>
                  <div className="flex gap-2 mb-3">
                    {product.frameSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 text-[11px] font-bold tracking-widest uppercase border transition-all ${
                          selectedSize === size
                            ? 'border-foreground bg-foreground text-background'
                            : 'border-border text-foreground hover:border-foreground'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  {selectedSize && (
                    <button
                      onClick={() => handleWhatsAppOrder(`Quadro ${selectedSize}`)}
                      className="w-full py-3 text-center text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 border border-foreground text-foreground hover:bg-foreground hover:text-background"
                    >
                      <MessageSquare className="w-4 h-4" />
                      {t('aniwall.order_whatsapp')} ({selectedSize})
                    </button>
                  )}
                </div>
              </>
            )}

            {product.productType === 'phone' && (
              <>
                {/* Digital — €2 */}
                <div className="mb-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3 text-foreground">
                    {t('aniwall.digital_image')}
                  </h4>
                  <button
                    onClick={handleDigitalPurchase}
                    className="w-full py-3 text-center text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 bg-foreground text-background hover:opacity-80"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {t('aniwall.buy_digital')} — {product.digitalPrice}€
                  </button>
                </div>

                {/* Phone Case — €20 via WhatsApp */}
                <div className="mb-8">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3 text-foreground">
                    {t('aniwall.phone_case')}
                  </h4>
                  <button
                    onClick={() => handleWhatsAppOrder(`Capa de telemóvel — ${product.phonePrice}€`)}
                    className="w-full py-3 text-center text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 border border-foreground text-foreground hover:bg-foreground hover:text-background"
                  >
                    <MessageSquare className="w-4 h-4" />
                    {t('aniwall.order_phone_case')} — {product.phonePrice}€
                  </button>
                </div>
              </>
            )}

            <div className="pt-6 border-t border-border italic">
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                {t('aniwall.handcrafted_note')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AniWallGrid;
