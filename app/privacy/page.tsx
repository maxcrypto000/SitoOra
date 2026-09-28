
export const metadata = {
  title: "Informativa sulla Privacy | SitoOra",
  description: "L'informativa sulla privacy di SitoOra. Scopri come proteggiamo e gestiamo i tuoi dati.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Elementi decorativi in background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Informativa sulla <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">Privacy</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
          <div className="prose prose-invert prose-blue max-w-none prose-headings:text-white prose-p:text-neutral-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-li:text-neutral-300">
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">1. Introduzione</h2>
              <p>
                Benvenuti su <strong>SitoOra</strong>. La vostra privacy è importante per noi. Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le vostre informazioni quando visitate il nostro sito web o utilizzate i nostri servizi di sviluppo web.
              </p>
              <p>
                Vi preghiamo di leggere attentamente questa informativa. Se non siete d'accordo con i termini di questa informativa sulla privacy, vi preghiamo di non accedere al sito o utilizzare i nostri servizi.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">2. Raccolta dei Dati</h2>
              <p>Possiamo raccogliere informazioni su di voi in vari modi. Le informazioni che possiamo raccogliere includono:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Dati Personali:</strong> Informazioni identificabili personalmente, come nome, indirizzo e-mail, numero di telefono, che ci fornite volontariamente quando ci contattate per richiedere un preventivo o informazioni.</li>
                <li><strong>Dati di Navigazione:</strong> Informazioni che i nostri server raccolgono automaticamente quando accedete al sito, come il vostro indirizzo IP, tipo di browser, sistema operativo, tempi di accesso e le pagine visualizzate direttamente prima e dopo aver visitato il sito.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">3. Utilizzo delle Informazioni</h2>
              <p>Utilizziamo le informazioni che raccogliamo su di voi o che ci fornite per:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Fornire, mantenere e migliorare il nostro sito web e i nostri servizi di sviluppo e design.</li>
                <li>Comprendere e analizzare come utilizzate il nostro sito web.</li>
                <li>Comunicare con voi, direttamente o tramite uno dei nostri partner, per fornire assistenza clienti o per rispondere alle vostre richieste (es. preventivi).</li>
                <li>Inviarvi e-mail periodiche relative al vostro ordine o ad altri prodotti e servizi se avete acconsentito (newsletter).</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">4. Sicurezza dei Dati</h2>
              <p>
                La sicurezza dei vostri dati personali è importante per noi, ma ricordate che nessun metodo di trasmissione su Internet o metodo di archiviazione elettronica è sicuro al 100%. Sebbene ci sforziamo di utilizzare mezzi commercialmente accettabili per proteggere i vostri dati personali (inclusa la crittografia e l'uso di connessioni HTTPS), non possiamo garantirne l'assoluta sicurezza.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">5. Cookie e Tecnologie di Tracciamento</h2>
              <p>
                Utilizziamo cookie e tecnologie di tracciamento simili (come web beacon e pixel) per tracciare l'attività sul nostro servizio e conservare determinate informazioni. I cookie sono file con una piccola quantità di dati che possono includere un identificatore univoco anonimo.
              </p>
              <p>
                Potete indicare al vostro browser di rifiutare tutti i cookie o di indicare quando viene inviato un cookie. Tuttavia, se non accettate i cookie, potreste non essere in grado di utilizzare alcune porzioni del nostro servizio.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">6. Modifiche a Questa Informativa</h2>
              <p>
                Potremmo aggiornare la nostra Informativa sulla Privacy di tanto in tanto. Vi informeremo di eventuali modifiche pubblicando la nuova Informativa sulla Privacy su questa pagina.
              </p>
              <p>
                Vi consigliamo di rivedere periodicamente questa Informativa sulla Privacy per eventuali modifiche. Le modifiche a questa Informativa sulla Privacy entrano in vigore quando vengono pubblicate su questa pagina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">7. Contattaci</h2>
              <p>
                Se avete domande su questa Informativa sulla Privacy, vi preghiamo di contattarci:
              </p>
              <ul className="list-none space-y-2 mt-4 text-neutral-300">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>Email: <a href="mailto:info@sitoora.it" className="text-blue-400 hover:text-blue-300 transition-colors">info@sitoora.it</a></span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>Telefono: +39 331 734 9165</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
