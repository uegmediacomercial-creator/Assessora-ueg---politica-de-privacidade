export default function App() {
  return (
    <main className="min-h-screen bg-white text-neutral-800 antialiased selection:bg-neutral-100">
      <article className="max-w-[800px] mx-auto px-6 py-12 sm:py-16 md:py-20 font-sans leading-relaxed text-[15px] sm:text-base">
        
        {/* Cabeçalho com Logo, Nome UEG e Título */}
        <header className="mb-10 sm:mb-12 pb-6 border-b border-neutral-200">
          
          {/* Logo e Nome UEG (sem animação, sem laranja por trás, sem selo 'oficial') */}
          <div className="flex items-center gap-3.5 mb-6">
            <img
              src="/assets/aistudio/LOGO_-_ueg_08ec2ea8.jpeg"
              alt="Logo UEG"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg object-cover"
            />
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 block leading-tight">
                UEG
              </span>
              <span className="text-xs sm:text-sm text-neutral-500 font-normal">
                ASSESSORIA UEG LTDA
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 mb-3">
            POLÍTICA DE PRIVACIDADE
          </h1>
          <p className="text-sm text-neutral-500 font-medium">
            Última atualização: 03/11/2026
          </p>
        </header>

        {/* Conteúdo do Documento */}
        <div className="space-y-8 sm:space-y-10 text-neutral-800">
          
          {/* Seção 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
              1. QUEM SOMOS
            </h2>
            <p>
              Esta Política de Privacidade descreve como a ASSESSORIA UEG LTDA, nome comercial UEG, inscrita no CNPJ sob o nº 69.363.614/0001-34, com sede em Ananindeua, Pará, Brasil (&quot;UEG&quot;, &quot;nós&quot;), coleta, utiliza, armazena e protege os dados pessoais de visitantes e interessados em nossos serviços, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD).
            </p>
            <p>
              Ao navegar em nosso site (
              <a
                href="https://assessoria-ueg.vercel.app/lp"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-600 transition-colors"
              >
                https://assessoria-ueg.vercel.app/lp
              </a>
              ) ou preencher nossos formulários, inclusive os formulários de anúncios no Facebook e no Instagram, você declara ter lido e compreendido esta política.
            </p>
          </section>

          {/* Seção 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
              2. QUAIS DADOS COLETAMOS
            </h2>
            <p>
              <strong>2.1 Dados que você nos fornece:</strong> ao preencher nossos formulários, coletamos seu nome completo, e-mail e, quando solicitado, telefone/WhatsApp e demais informações pedidas no formulário, como segmento de atuação ou informações sobre seu negócio.
            </p>
            <p>
              <strong>2.2 Dados coletados automaticamente:</strong> endereço IP, tipo de dispositivo, navegador, sistema operacional, páginas visitadas, tempo de permanência, origem do acesso (por exemplo, o anúncio ou a rede social de onde você veio) e demais dados de navegação, por meio de cookies e tecnologias semelhantes.
            </p>
            <p>
              <strong>2.3 Dados de contato por outros canais:</strong> se você falar conosco por WhatsApp, Instagram ou e-mail, podemos registrar as informações que você nos enviar nessas conversas.
            </p>
          </section>

          {/* Seção 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
              3. PARA QUE USAMOS SEUS DADOS
            </h2>
            <p>Utilizamos seus dados pessoais para:</p>
            <ul className="list-disc pl-6 space-y-1.5 marker:text-neutral-400">
              <li>Entrar em contato com você por telefone, WhatsApp ou e-mail, em resposta à sua solicitação;</li>
              <li>Apresentar nossos serviços de assessoria de marketing, gestão de tráfego pago, processo comercial e soluções com inteligência artificial;</li>
              <li>Agendar conversas, diagnósticos e reuniões comerciais;</li>
              <li>Enviar informações, propostas e conteúdos relacionados ao seu interesse;</li>
              <li>Organizar e acompanhar o relacionamento comercial em nosso sistema de gestão de contatos (CRM);</li>
              <li>Medir o desempenho de nossas campanhas, melhorar nossos anúncios, nosso site e nossa comunicação;</li>
              <li>Cumprir obrigações legais e regulatórias e exercer nossos direitos em processos judiciais ou administrativos.</li>
            </ul>
          </section>

          {/* Seção 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
              4. BASE LEGAL PARA O TRATAMENTO
            </h2>
            <p>
              Tratamos seus dados com base nas hipóteses previstas na LGPD, em especial: (i) seu consentimento, ao enviar o formulário; (ii) a execução de procedimentos preliminares relacionados a um contrato do qual você seja parte, a seu pedido; (iii) o cumprimento de obrigação legal ou regulatória; e (iv) nosso legítimo interesse, como a melhoria de nossos serviços e a mensuração de campanhas, sempre respeitando seus direitos e liberdades fundamentais.
            </p>
          </section>

          {/* Seção 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
              5. COOKIES E FERRAMENTAS DE RASTREAMENTO
            </h2>
            <p>
              Nosso site utiliza cookies e tecnologias de terceiros, como o Pixel da Meta (Facebook e Instagram), para entender como os visitantes interagem com a página, mensurar resultados de campanhas e exibir anúncios mais relevantes. Esses dados podem ser tratados pela Meta conforme a política de privacidade da própria plataforma.
            </p>
            <p>
              Você pode gerenciar, bloquear ou excluir cookies a qualquer momento nas configurações do seu navegador e ajustar suas preferências de anúncios diretamente nas configurações de sua conta no Facebook e no Instagram. Desativar alguns cookies pode afetar o funcionamento de partes do site.
            </p>
          </section>

          {/* Seção 6 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
              6. FORMULÁRIOS DE ANÚNCIOS (FACEBOOK E INSTAGRAM)
            </h2>
            <p>
              Quando você preenche um formulário em nossos anúncios no Facebook ou Instagram, as informações que você fornece são recebidas por nós e usadas exclusivamente para as finalidades descritas nesta política. A plataforma da Meta também trata dados nesse processo, de acordo com seus próprios termos e política de privacidade.
            </p>
          </section>

          {/* Seção 7 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
              7. COMPARTILHAMENTO DE DADOS
            </h2>
            <p>Não vendemos nem alugamos seus dados pessoais. Podemos compartilhá-los apenas nas seguintes situações:</p>
            <ul className="list-disc pl-6 space-y-1.5 marker:text-neutral-400">
              <li>Com fornecedores e ferramentas que nos ajudam a operar, como sistemas de CRM, hospedagem, planilhas, e-mail e comunicação, que tratam os dados conforme nossas instruções e com medidas de segurança adequadas;</li>
              <li>Com plataformas de publicidade, como a Meta, para mensuração e otimização de campanhas;</li>
              <li>Com autoridades públicas, quando houver obrigação legal, regulatória ou ordem judicial.</li>
            </ul>
            <p>
              Alguns desses fornecedores podem armazenar dados em servidores localizados fora do Brasil. Nesses casos, adotamos medidas para que a transferência ocorra em conformidade com a LGPD.
            </p>
          </section>

          {/* Seção 8 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
              8. POR QUANTO TEMPO GUARDAMOS SEUS DADOS
            </h2>
            <p>
              Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta política, para manter o relacionamento comercial, ou para cumprir obrigações legais e regulatórias. Encerrado esse prazo, os dados são excluídos ou anonimizados, salvo quando a lei exigir sua conservação.
            </p>
          </section>

          {/* Seção 9 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
              9. SEGURANÇA DOS DADOS
            </h2>
            <p>
              Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados pessoais contra acessos não autorizados, destruição, perda, alteração ou qualquer forma de tratamento inadequado. Nenhum sistema é totalmente imune a riscos, mas trabalhamos continuamente para manter um nível de proteção adequado.
            </p>
          </section>

          {/* Seção 10 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
              10. SEUS DIREITOS COMO TITULAR
            </h2>
            <p>Nos termos da LGPD, você pode solicitar a qualquer momento:</p>
            <ul className="list-disc pl-6 space-y-1.5 marker:text-neutral-400">
              <li>Confirmação de que tratamos seus dados pessoais;</li>
              <li>Acesso aos seus dados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei;</li>
              <li>Portabilidade dos dados;</li>
              <li>Eliminação dos dados tratados com base no seu consentimento;</li>
              <li>Informação sobre as entidades com as quais compartilhamos seus dados;</li>
              <li>Informação sobre a possibilidade de não fornecer consentimento e suas consequências;</li>
              <li>Revogação do consentimento, a qualquer momento.</li>
            </ul>
          </section>

          {/* Seção 11 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
              11. COMO FALAR CONOSCO
            </h2>
            <p>Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato:</p>
            <ul className="list-disc pl-6 space-y-1.5 marker:text-neutral-400">
              <li>Responsável pelo tratamento de dados: João Felipe</li>
              <li>
                E-mail:{' '}
                <a
                  href="mailto:uegmedia.comercial@gmail.com"
                  className="underline hover:text-neutral-600 transition-colors"
                >
                  uegmedia.comercial@gmail.com
                </a>
              </li>
              <li>
                WhatsApp:{' '}
                <a
                  href="https://wa.me/5591984867676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-neutral-600 transition-colors"
                >
                  (91) 98486-7676
                </a>
              </li>
              <li>
                Instagram:{' '}
                <a
                  href="https://instagram.com/assessoriaueg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-neutral-600 transition-colors"
                >
                  @assessoriaueg
                </a>
              </li>
            </ul>
            <p>Responderemos à sua solicitação em prazo razoável, conforme a legislação.</p>
          </section>

          {/* Seção 12 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
              12. MENORES DE IDADE
            </h2>
            <p>
              Nossos serviços são destinados a pessoas maiores de 18 anos e a empresas. Não coletamos intencionalmente dados pessoais de menores de idade. Se identificarmos que isso ocorreu, os dados serão excluídos.
            </p>
          </section>

          {/* Seção 13 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
              13. LINKS PARA OUTROS SITES
            </h2>
            <p>
              Nosso site pode conter links para páginas de terceiros, como redes sociais. Não somos responsáveis pelas práticas de privacidade desses sites e recomendamos a leitura das respectivas políticas.
            </p>
          </section>

          {/* Seção 14 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
              14. ALTERAÇÕES NESTA POLÍTICA
            </h2>
            <p>
              Podemos atualizar esta política periodicamente para refletir mudanças em nossas práticas ou na legislação. A versão vigente estará sempre disponível nesta página, com a data da última atualização.
            </p>
          </section>

          {/* Seção 15 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
              15. LEGISLAÇÃO E FORO
            </h2>
            <p>
              Esta política é regida pelas leis da República Federativa do Brasil. Eventuais conflitos serão resolvidos no foro da comarca de Ananindeua, Estado do Pará, salvo disposição legal em contrário.
            </p>
          </section>

          {/* Rodapé / Assinatura Legal */}
          <div className="pt-8 sm:pt-10 border-t border-neutral-200 text-neutral-600 font-medium text-sm">
            <p>ASSESSORIA UEG LTDA – CNPJ 69.363.614/0001-34</p>
          </div>

        </div>
      </article>
    </main>
  );
}
