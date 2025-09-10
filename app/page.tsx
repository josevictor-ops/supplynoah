"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Truck,
  Shield,
  PhoneCall,
  ChevronRight,
  Hammer,
  Settings,
} from "lucide-react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true, margin: "-100px" },
});

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/80 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo-noah.svg" alt="Supply Noah" width={55} height={55} priority />
            <span className="text-xs px-2 py-1 rounded-full bg-white/10 ml-2">
              Vendas & Serviços
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#produtos" className="hover:text-white">Produtos</a>
            <a href="#contato" className="hover:text-white">Contato</a>
            <a
              href="#contato"
              className="rounded-2xl bg-white text-neutral-900 px-4 py-2 font-medium hover:opacity-90"
            >
              Solicitar Cotação
            </a>
          </nav>
        </div>
      </header>

      {/* HERO com troca de imagens */}
      <section className="relative overflow-hidden h-[80vh] flex items-center">
        {["/hero1.svg", "/hero2.svg"].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 5,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn(0)}>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Soluções modernas para <span className="text-[#038072]">suprimentos</span> e
              <span className="text-[#038072]"> serviços</span>
            </h1>
            <p className="mt-5 text-neutral-300 text-lg">
              A Supply Noah conecta qualidade, prazo e preço em um só lugar. Atendemos
              obras, indústrias e operações offshore/onshore.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="rounded-2xl bg-white text-neutral-900 px-4 py-2 font-medium inline-flex items-center group"
              >
                Pedir Cotação
                <ChevronRight className="ml-1 size-4" />
              </a>
              <a
                href="#servicos"
                className="rounded-2xl border border-white/20 text-white px-4 py-2 font-medium hover:bg-white/10"
              >
                Ver serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn(0)} className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">Serviços</h2>
            <p className="text-neutral-300 mt-3">
              Da compra técnica à execução em campo, atuamos ponta a ponta.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: <Hammer className="size-6" />, title: "Serviços", desc: "Construção, reforma e inspeção." },
              { icon: <Settings className="size-6" />, title: "Suprimentos", desc: "Sourcing nacional e internacional." },
              { icon: <Truck className="size-6" />, title: "Logística", desc: "Excelência na entrega." },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fadeIn(0.05 * i)}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center gap-2 font-medium">
                  {s.icon}
                  {s.title}
                </div>
                <p className="text-neutral-300 mt-2 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="py-20 md:py-28 bg-neutral-900/40 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn(0)} className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Nossos <span className="text-[#038072]">Produtos</span>
            </h2>
            <p className="text-neutral-300 mt-3">
              Materiais com qualidade e conformidade para indústria, construção e operações offshore/onshore.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { title: "Tubulação", desc: "Tubos, conexões, flanges e vedações" },
              { title: "Instrumentação", desc: "Manômetros, válvulas e conexões" },
              { title: "Elétrica", desc: "Cabos, painéis, luminárias e tomadas" },
              { title: "Segurança", desc: "EPIs, sinalização e combate a incêndio" },
            ].map((p, i) => (
              <motion.div
                key={i}
                {...fadeIn(0.05 * i)}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <div className="text-lg font-medium text-[#038072]">{p.title}</div>
                <p className="text-neutral-300 text-sm mt-2">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <motion.div {...fadeIn(0)}>
            <h2 className="text-3xl md:text-4xl font-semibold">Contato</h2>
            <p className="text-neutral-300 mt-3">
              Preencha o formulário e nossa equipe retornará rapidamente.
            </p>
            <div className="mt-6 space-y-3 text-neutral-300">
              <div className="flex items-center gap-2">
                <PhoneCall className="text-[#038072]" /> +55 (21) 97687-1609
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[#038072]" /> vendas@supplynoah.com.br
              </div>
            </div>
          </motion.div>

          {/* FORM com WhatsApp e Email */}
          <motion.form
            id="contact-form"
            {...fadeIn(0.1)}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4"
          >
            <input name="name" placeholder="Nome" className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2" required />
            <input name="email" type="email" placeholder="Email" className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2" required />
            <textarea name="message" placeholder="Mensagem" className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 min-h-[100px]" required />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  const form = document.getElementById("contact-form") as HTMLFormElement;
                  const data = new FormData(form);
                  const name = String(data.get("name") || "");
                  const email = String(data.get("email") || "");
                  const message = String(data.get("message") || "");

                  const phone = "5521976871609";
                  const text =
                    `Olá! Quero solicitar uma cotação.%0A%0A` +
                    `*Nome:* ${name}%0A` +
                    `*Email:* ${email}%0A` +
                    `*Mensagem:* ${message}`;

                  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
                }}
                className="rounded-xl bg-[#25D366] text-neutral-900 px-4 py-2 font-medium"
              >
                Enviar pelo WhatsApp
              </button>

              <button
                type="button"
                onClick={() => {
                  const form = document.getElementById("contact-form") as HTMLFormElement;
                  const data = new FormData(form);
                  const name = String(data.get("name") || "");
                  const email = String(data.get("email") || "");
                  const message = String(data.get("message") || "");

                  const to = "vendas@supplynoah.com.br";
                  const subject = encodeURIComponent("Solicitação de cotação - Site Supply Noah");
                  const body = encodeURIComponent(
                    `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`
                  );

                  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
                }}
                className="rounded-xl bg-white text-neutral-900 px-4 py-2 font-medium"
              >
                Enviar por E-mail
              </button>
            </div>

            <p className="text-xs text-neutral-400">
              Escolha enviar sua mensagem por WhatsApp ou e-mail.
            </p>
          </motion.form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 text-center text-neutral-400 text-sm">
        © {new Date().getFullYear()} Supply Noah — Todos os direitos reservados.
      </footer>
    </div>
  );
}
