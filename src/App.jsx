import React, { useState } from 'react'

function Hero({ onExplore }){
  return (
    <header className="relative overflow-hidden bg-[#090909]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.36em] text-gray-400">Portrait of a township theatre-maker</p>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight text-white">MXOLISI "THE GREAT" MASILELA</h1>
            <p className="max-w-2xl text-xl md:text-2xl text-gray-200">A South African theatre-maker, cultural entrepreneur and community leader who has anchored independent township storytelling from[...]
            <button type="button" onClick={onExplore} className="inline-flex items-center gap-2 text-amber-300 hover:text-white transition">BIO<span aria-hidden>→</span></button>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img src="https://res.cloudinary.com/doaj3nv5i/image/upload/v1781120375/uqfvmk1hcglye4wmab9f.jpg" alt="Portrait of Mxolisi Masilela" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  )
}

function BackButton({ onBack }){
  return (
    <button 
      onClick={onBack} 
      className="fixed top-6 right-6 z-50 md:static text-amber-300 hover:text-white transition inline-flex items-center gap-2 rounded-full bg-amber-300/10 px-4 py-2 hover:bg-amber-300/20"
      aria-label="Back to homepage"
    >
      <span aria-hidden>←</span> Back
    </button>
  )
}

function BioPage({ onBack }){
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <header className="border-b border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-gray-400">Biography</p>
            <h1 className="text-4xl md:text-5xl font-serif text-white">Mxolisi "The Great" Masilela</h1>
          </div>
          <BackButton onBack={onBack} />
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle">Early Life & Personal Background</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Born in the Madelakufa informal settlement in Tembisa, Ekurhuleni, Gauteng, Mxolisi grew up facing significant challenges, including an abse[...]
          <p className="mt-4 text-gray-300 leading-relaxed">At age nine, theatre entered his life when he secretly joined the Rutanang Community Theatre Project, later known as Sizimele Art Foundation[...]
        </section>
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle">Education & Training</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">After Grade 12, Mxolisi trained formally at Windybrow Theatre's performing arts program, where he honed his skills in performance, directi[...]
          <p className="mt-4 text-gray-300 leading-relaxed">He also gained international exposure through training or residencies linked to NIDA in Australia around 2018. He has served as a visiting a[...]
        </section>
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle">Artistic Philosophy & Impact</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Mxolisi views theatre as a mirror to the community, a tool for activism, healing, awareness, and social change. He addresses teenage pregnan[...]
          <p className="mt-4 text-gray-300 leading-relaxed">He believes community theatre artists are "servants of God" chosen to serve and heal. Storytelling connects, inspires, provokes, and amplifi[...]
        </section>
      </main>
    </div>
  )
}

function AutobioPage({ onBack }){
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <header className="border-b border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-gray-400">Autobio</p>
            <h1 className="text-4xl md:text-5xl font-playfair text-amber-300">My Name is Mxolisi "The Great" Masilela</h1>
          </div>
          <BackButton onBack={onBack} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] items-start">
            <div>
              <h2 className="text-3xl font-playfair sparkle text-amber-300">This is My Full Story</h2>
              <p className="mt-6 text-gray-300 leading-relaxed">I was born in the Madelakufa informal settlement in Tembisa, Ekurhuleni, Gauteng. Life was raw and unforgiving. My childhood carried dee[...]
              <p className="mt-4 text-gray-300 leading-relaxed">I remember walking in the middle of the night with my mother to family in Stama, her holding my hand and my younger brother Timbal's. [...]
              <p className="mt-4 text-gray-300 leading-relaxed">At around nine or ten years old (early 2000s), I secretly joined the Rutanang Community Theatre Project (later part of Sizimele Art Foun[...]
            </div>
            <div className="overflow-hidden rounded-3xl bg-[#111] shadow-xl">
              <img src="https://res.cloudinary.com/doaj3nv5i/image/upload/v1781133877/lhzkgp82n7tmgyf6r9vu.jpg" alt="Mxolisi The Great autobiographical portrait" className="w-full h-full object-cover"[...]
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Becoming an Artist and a Father</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">In Grade 10, I wrote and directed my first play, Dropping in the Heart, about the clash between parental expectations and a child's true c[...]
          <p className="mt-4 text-gray-300 leading-relaxed">I began creating urgently — often with all-female or all-male casts — to tell honest stories about identity, pain, and resilience.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">I am a husband and a father. I have a daughter who is my greatest motivation and responsibility. In reflections on fatherhood and absent fat[...]
          <p className="mt-4 text-gray-300 leading-relaxed">My marriage and family life are sacred; I speak often about love, commitment, and brotherhood in podcasts and dialogues, including heartfelt[...]
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">The Plays and the Pain</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">My early breakthroughs came fast:</p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-300">
            <li>Ekgontshini (2008) on crime and violence.</li>
            <li>Choices (2010, all-female) — Ishashalazi nominations.</li>
            <li>After Tears (2011).</li>
            <li>Queen the Chosen Ones (2012, all-male musical on liberation heroes) — Zwakala Top 3, Naledi nomination.</li>
            <li>Thula Thula (2014) — Zwakala winner.</li>
          </ul>
          <p className="mt-4 text-gray-300 leading-relaxed">Then came deeper works: Insanity, Exhibition (men's emotions), Medumo ya Borwa (Ovation recognition), Walls & Pillows, These Are Not My Sh[...]
          <p className="mt-4 text-gray-300 leading-relaxed">I have also acted on stage and in the Mzansi Magic series Stash.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">The TX Theatre – My Greatest Legacy</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">In 2008, at age 17, I founded TX Theatre Productions. The physical dream became reality with The TX Theatre — a 100-seater hub near Moses [...]
          <p className="mt-4 text-gray-300 leading-relaxed">It is a professional home staging around 50 shows yearly, mentoring talent, and bridging township to mainstream stages. It is holy ground.</[...]
          <p className="mt-4 text-gray-300 leading-relaxed">Through it, I lead Tembisa Theatre Week (10th edition in 2026), Kuwamba National Women's Theatre Festival, training programmes, awards, an[...]
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">The Writers' Lab – Nurturing New Voices</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">The Writers' Lab (or Writers Lab SA / Pretoria) is a vital partner and extension of our work at TX Theatre. Together, we run workshops, sc[...]
          <p className="mt-4 text-gray-300 leading-relaxed">We publish anthologies like "A Gathering of Stories" (launched with readings at TX Theatre and Johannesburg), which includes my play Unchart[...]
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Brothers, Collaborators, and Friends</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Theatre is family. My long-time partner and business collaborator is Mongezi Mabunda — we've built so much together. Close creatives inc[...]
          <p className="mt-4 text-gray-300 leading-relaxed">Dialogues with Masai Sepuru on love, marriage, fatherhood, and art have been profound. The TX family — from emerging artists to veterans […]</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Recognition and Ongoing Journey</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">I am a 2025 ISPA Global Fellow, featured in Mail & Guardian's 200 Young South Africans, multiple Naledi Award recipient (productions and i[...]
          <p className="mt-4 text-gray-300 leading-relaxed">I continue writing new plays (including one about prayer and men kneeling), curating festivals, advocating for funding and transport support[...]
          <p className="mt-4 text-gray-300 leading-relaxed">I am a philanthropist, facilitator, curator, producer, and entrepreneur in the arts. I believe artists are servants chosen to heal, provoke,[...]
          <p className="mt-4 text-gray-300 leading-relaxed">My daughter, my wife, my family, my brothers in the arts, and the communities we serve keep me grounded. I refuse to pass on unbroken cycles[...]
          <p className="mt-4 text-amber-200 font-semibold">Woz'obloma nathi — Come and bloom with us.</p>
          <p className="mt-2 text-gray-300">My name is Mxolisi "The Great" Masilela. This is my life, my truth, and my offering.</p>
        </section>
      </main>
    </div>
  )
}

function TtwPage({ onBack }){
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <header className="border-b border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-gray-400">Festival Spotlight</p>
            <h1 className="text-4xl md:text-5xl font-playfair text-amber-300 sparkle">Tembisa Theatre Week</h1>
          </div>
          <BackButton onBack={onBack} />
        </div>
      </header>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/doaj3nv5i/image/upload/v1781123937/xigecnmgijjnmhhydkyf.jpg')] bg-cover bg-center opacity-90" />
        <div className="relative max-w-6xl mx-auto px-6 py-28">
          <p className="text-sm uppercase tracking-[0.36em] text-gray-200">Founded by TX Theatre Productions</p>
          <h2 className="mt-4 text-5xl md:text-6xl font-playfair text-amber-200 sparkle">A flagship festival for township storytelling</h2>
          <p className="mt-6 max-w-3xl text-gray-200">Tembisa Theatre Week is an annual celebration of independent theatre makers, new plays and community creativity. It brings together emerging and e[...]
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">History and Vision</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Founded around 2017, the first edition of Tembisa Theatre Week ran from 21–29 January 2017 with 13 new theatre productions premiering. By [...]
          <p className="mt-4 text-gray-300 leading-relaxed">Mxolisi describes the festival as a collective artistic vision rooted in community, bridging township creativity with broader recognition wh[...]
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Purpose and Impact</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">The festival showcases new and original productions, often around 10 plays per edition, alongside dance, music and interdisciplinary works. [...]
          <p className="mt-4 text-gray-300 leading-relaxed">Sponsored and low-cost tickets ensure broad attendance, bringing the local community together under the rallying cry "Woz'bloma nathi!" 🎭</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Format and Activities</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">The festival typically runs for about a week in January or February at The TX Theatre in the Moses Molelekwa Community Centre area. It inclu[...]
          <p className="mt-4 text-gray-300 leading-relaxed">Many productions from Tembisa Theatre Week go on to further recognition, touring to places like Market Theatre, the National Arts Festival, [...]
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Recent Editions</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">The 10th edition in 2026 was a major milestone celebration with open calls for 10 new productions and strong sponsorship support. The 2025 e[...]
          <p className="mt-4 text-gray-300 leading-relaxed">This festival complements other TX Theatre initiatives, including the Kuwamba National Women's Theatre Festival, and forms part of Mxolisi[...]
        </section>
      </main>
    </div>
  )
}

function LeinaPage({ onBack }){
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <header className="border-b border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-gray-400">Production Spotlight</p>
            <h1 className="text-4xl md:text-5xl font-playfair text-amber-300 sparkle">LEINA (The Name)</h1>
          </div>
          <BackButton onBack={onBack} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] items-start">
            <div>
              <h2 className="text-3xl font-playfair sparkle text-amber-300">Background and Creation</h2>
              <p className="mt-6 text-gray-300 leading-relaxed">LEINA is a powerful, spiritually resonant theatre production written and directed by Mxolisi "The Great" Masilela. Produced by The T[...]
              <p className="mt-4 text-gray-300 leading-relaxed">The concept emerged shortly before the passing of his beloved mother. Mxolisi describes it as a labour of love and spirituality, explori[...]
            </div>
            <div className="overflow-hidden rounded-3xl bg-[#111] shadow-xl">
              <img src="https://res.cloudinary.com/doaj3nv5i/image/upload/v1781125171/drbn5clwhy8fhhy9h4ys.jpg" alt="LEINA production image" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Core Themes</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Names are presented as carriers of spirituality, legacy, ritual and ancestral memory. The piece explores reincarnation through names, linkin[...]
          <p className="mt-4 text-gray-300 leading-relaxed">It draws on African ritual performance, music and prayer, influenced by Mxolisi's NIDA training on Ritual as Performance, creating a rich,[...]
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Production Details</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Writer & Director: Mxolisi "The Great" Masilela. Production Manager: Precious Mashishi. Lighting & Sound Design: Sizwe Ndabane.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">Key cast includes Tswarelo "Ntate" Selolo, Gifter Ngobeni, Mongezi Mabunda, and others. Musicians and choir members include Amanda Khuma[...]
          <p className="mt-4 text-gray-300 leading-relaxed">Duration: Approximately 50 minutes. Target audience: 16+ due to spiritual and emotional depth.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Awards and Impact</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">LEINA received four nominations at the 2024 Naledi Theatre Awards: Best Production of a Play, Lead Actor Male, Supporting Actor Male, and En[...]
          <p className="mt-4 text-gray-300 leading-relaxed">The production reinforces Mxolisi's philosophy of theatre as holy ground for healing, cultural reconnection and amplifying township voices[...]
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Watch the Trailer</h2>
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-black">
            <video controls className="w-full h-full min-h-[260px] bg-black">
              <source src="https://res.cloudinary.com/doaj3nv5i/video/upload/v1781124938/uymg0bn7x6pz1orbhuz5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </main>
    </div>
  )
}

function ShoesPage({ onBack }){
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <header className="border-b border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-gray-400">Production Spotlight</p>
            <h1 className="text-4xl md:text-5xl font-playfair text-amber-300 sparkle">These Are Not My Shoes</h1>
          </div>
          <BackButton onBack={onBack} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] items-start">
            <div>
              <h2 className="text-3xl font-playfair sparkle text-amber-300">Themes and Synopsis</h2>
              <p className="mt-6 text-gray-300 leading-relaxed">These Are Not My Shoes centers on two brothers, Themba and Xolani, whose father disappears from their lives. It explores the emotional c[...]
              <p className="mt-4 text-gray-300 leading-relaxed">The shoe imagery becomes a core metaphor for inheritance, fitting into roles not meant for you, and the burdens passed down — or aband[...]
            </div>
            <div className="overflow-hidden rounded-3xl bg-[#111] shadow-xl">
              <img src="https://res.cloudinary.com/doaj3nv5i/image/upload/v1781126359/jcskauagiy2htplnrdyr.jpg" alt="These Are Not My Shoes production image" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Production Details</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Writer & Director: Mxolisi "The Great" Masilela. Key cast includes Tshwarelo Selolo, Mongezi Mabunda, Thabang Chauke, and Itumeleng Moek[...]
          <p className="mt-4 text-gray-300 leading-relaxed">Live music and ensemble performance are central to the play's emotional power, with musicians and performers creating a raw, immersive atm[...]
          <p className="mt-4 text-gray-300 leading-relaxed">Run length: 50–70 minutes. Style: dramatic, musical, ritualistic and physically charged, with a deep focus on authenticity and community s[...]
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Performance History</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">The play premiered at TX Theatre and has been staged strongly during Tembisa Theatre Week, Joburg Theatre, Artscape and festivals like Baxte[...]
          <p className="mt-4 text-gray-300 leading-relaxed">This piece remains one of Mxolisi's most performed works, praised for its social commentary, realism and ensemble strength.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Awards and Recognition</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">These Are Not My Shoes earned a Naledi nomination for Best Independent/Fringe Theatre Production and has been praised for its heart-wrenchin[...]
          <p className="mt-4 text-gray-300 leading-relaxed">Critics and audiences note its strong social commentary on absent fathers, brotherhood, trauma and identity.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Watch the Trailer</h2>
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-black">
            <video controls className="w-full h-full min-h-[260px] bg-black">
              <source src="https://res.cloudinary.com/doaj3nv5i/video/upload/v1781126441/nlhqpoj1laeycwnpozw6.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </main>
    </div>
  )
}

function MalepaPage({ onBack }){
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <header className="border-b border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-gray-400">Production Spotlight</p>
            <h1 className="text-4xl md:text-5xl font-playfair text-amber-300 sparkle">Malepa The Musical</h1>
          </div>
          <BackButton onBack={onBack} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] items-start">
            <div>
              <h2 className="text-3xl font-playfair sparkle text-amber-300">Synopsis and Themes</h2>
              <p className="mt-6 text-gray-300 leading-relaxed">Malepa The Musical tells the story of a secret society in the north of South Africa. It celebrates authentic African spiritual tradition[...]
              <p className="mt-4 text-gray-300 leading-relaxed">Malepa is a hidden village between mountains, inhabited by supernatural people who live by night and are visible only to those with a he[...]
            </div>
            <div className="overflow-hidden rounded-3xl bg-[#111] shadow-xl">
              <img src="https://res.cloudinary.com/doaj3nv5i/image/upload/v1771524922/uexdpbbkekxgf4rpo0qe.jpg" alt="Malepa The Musical image" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Creative Team</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Writer & Director: Mxolisi "The Great" Masilela. Choreography by Sfiso "Bheseni" Botha with Muzi Shili. Music composition and direct[...]
          <p className="mt-4 text-gray-300 leading-relaxed">Produced by The TX Theatre in collaboration with Umzekelo Cultural Organisation, the production is praised for its technical excellence in l[...]
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Performance History</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Malepa premiered at TX Theatre in Tembisa around September 2022 and was presented as a major community and cultural event. It has been reviv[...]
          <p className="mt-4 text-gray-300 leading-relaxed">The show stands alongside works like LEINA, These Are Not My Shoes, Behind Van Vuuren's Farm and Adam's Ale, reflecting Mxolisi's vers[...]
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Significance</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Malepa exemplifies Mxolisi's philosophy of theatre as holy ground, honoring African traditions while challenging misconceptions about spir[...]
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Performance</h2>
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-black">
            <video controls className="w-full h-full min-h-[260px] bg-black">
              <source src="https://res.cloudinary.com/doaj3nv5i/video/upload/v1781130585/fhsdqpeot3xwxpofb00o.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </main>
    </div>
  )
}

function VanVuurenPage({ onBack }){
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <header className="border-b border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-gray-400">Production Spotlight</p>
            <h1 className="text-4xl md:text-5xl font-playfair text-amber-300 sparkle">Behind Van Vuuren's Farm</h1>
          </div>
          <BackButton onBack={onBack} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] items-start">
            <div>
              <h2 className="text-3xl font-playfair sparkle text-amber-300">Synopsis and Themes</h2>
              <p className="mt-6 text-gray-300 leading-relaxed">Set on the boundary of Limpopo, the play centers on Van Vuuren's farm — a malevolent playground where white power, land control and [...]
              <p className="mt-4 text-gray-300 leading-relaxed">The story follows a family whose hopes are crushed by oppression, with the mother holding fast to education and the possibility of freed[...]
            </div>
            <div className="overflow-hidden rounded-3xl bg-[#111] shadow-xl">
              <img src="https://res.cloudinary.com/doaj3nv5i/image/upload/v1771522888/m3dxy1hmplpyrtqjgtpw.jpg" alt="Behind Van Vuuren's Farm production image" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Production Details</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Writer & Director: Mxolisi "The Great" Masilela. Produced by The TX Theatre Hub, the production explores racial injustice, farmworker ex[...]
          <p className="mt-4 text-gray-300 leading-relaxed">Featured cast includes Gifter Ngobeni and Tshwarelo Selolo, bringing raw, emotionally charged performances to a work that is both urgent and[...]
          <p className="mt-4 text-gray-300 leading-relaxed">Style: intense dramatic theatre with strong physicality, ritual undertones and a relentless focus on family trauma, resilience and the searc[...]
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Performance History</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Performed at The TX Theatre in Tembisa and featured during Tembisa Theatre Week, the production also reached city audiences through Joburg T[...]
          <p className="mt-4 text-gray-300 leading-relaxed">It is part of Mxolisi's broader work in township storytelling, standing alongside LEINA, These Are Not My Shoes and Malepa as a powerful p[...]
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Significance</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Behind Van Vuuren's Farm is an unflinching cry against ongoing violence, systemic oppression and the silence around farmworker suffering. [...]
        </section>
      </main>
    </div>
  )
}

function Section({id, children, className=''}){
  return (
    <section id={id} className={`py-20 px-6 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  )
}

export default function App(){
  const [page, setPage] = useState('home')

  if (page === 'bio') {
    return <BioPage onBack={() => setPage('home')} />
  }

  if (page === 'ttw') {
    return <TtwPage onBack={() => setPage('home')} />
  }

  if (page === 'leina') {
    return <LeinaPage onBack={() => setPage('home')} />
  }

  if (page === 'shoes') {
    return <ShoesPage onBack={() => setPage('home')} />
  }

  if (page === 'vanvuuren') {
    return <VanVuurenPage onBack={() => setPage('home')} />
  }

  if (page === 'autobio') {
    return <AutobioPage onBack={() => setPage('home')} />
  }

  if (page === 'malepa') {
    return <MalepaPage onBack={() => setPage('home')} />
  }

  return (
    <div className="bg-[#090909] text-white">
      <Hero onExplore={() => setPage('bio')} />

      <Section id="autobio" className="bg-[#0b0b0b] rounded-3xl shadow-xl shadow-black/40">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-gray-400">Autobio</p>
            <h2 className="text-4xl font-playfair sparkle text-amber-300">Meet The Great</h2>
            <p className="mt-6 text-gray-300 leading-relaxed">My Name is Mxolisi "The Great" Masilela. This is my full story — from Madelakufa to founding TX Theatre, building festivals, mentori[...]
            <button type="button" onClick={() => setPage('autobio')} className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-300/10 px-6 py-3 text-amber-200 hover:bg-amber-300/20 transiti[...]
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
            <img src="https://res.cloudinary.com/doaj3nv5i/image/upload/v1781133877/lhzkgp82n7tmgyf6r9vu.jpg" alt="Mxolisi The Great Masilela" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      <Section id="hub">
        <h2 className="text-3xl font-playfair sparkle">TX Theatre Production</h2>
        <p className="mt-4 text-gray-300 max-w-3xl">Founded around 2008, TX Theatre in Tembisa is a 100-seater rehearsal, workshop, festival and development hub staging 50+ shows annually. The venue s[...]
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><strong>15+ Years</strong><div className="text-sm text-gray-400">of practice</div></div>
          <div><strong>50 Shows/Year</strong><div className="text-sm text-gray-400">theatre, music, poetry</div></div>
          <div><strong>Naledi Noms</strong><div className="text-sm text-gray-400">national recognition</div></div>
          <div><strong>ISPA Fellow 2025</strong><div className="text-sm text-gray-400">global exchange</div></div>
        </div>
        <div className="mt-10 rounded-3xl bg-white/5 p-8 border border-white/10 shadow-xl">
          <h3 className="text-3xl font-playfair sparkle text-amber-300">Tembisa Theatre Week</h3>
          <p className="mt-4 text-gray-300 max-w-3xl">Annual flagship festival curated by Mxolisi "The Great" Masilela through The TX Theatre. Click to explore the story and impact behind this tow[...]
          <button type="button" onClick={() => setPage('ttw')} className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-300/10 px-6 py-3 text-amber-200 hover:bg-amber-300/20 transition">Ex[...]
        </div>
      </Section>

      <Section id="productions" className="bg-[#0b0b0b] rounded-3xl shadow-xl shadow-black/40">
        <h2 className="text-3xl font-playfair sparkle">Productions Spotlight</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <button type="button" onClick={() => setPage('leina')} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] text-left shadow-xl transition duration-300 hover:-transl[...]
            <div className="aspect-[4/3] bg-[url('https://res.cloudinary.com/doaj3nv5i/image/upload/v1781125171/drbn5clwhy8fhhy9h4ys.jpg')] bg-cover bg-center transition duration-500 group-hover:scale[...]
            <div className="p-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-2xl font-semibold text-white">LEINA (The Name)</div>
                <span className="rounded-full bg-amber-300/15 px-3 py-1 text-sm font-semibold text-amber-200 animate-pulse">Naledi nominated</span>
              </div>
              <p className="mt-3 text-gray-300">Labour of love and spirituality — 4 Naledi nominations.</p>
              <div className="mt-5 inline-flex items-center gap-2 text-amber-300">Watch story and video<span aria-hidden>→</span></div>
            </div>
          </button>
          <button type="button" onClick={() => setPage('shoes')} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] text-left shadow-xl transition duration-300 hover:-transl[...]
            <div className="aspect-[4/3] bg-[url('https://res.cloudinary.com/doaj3nv5i/image/upload/v1781126359/jcskauagiy2htplnrdyr.jpg')] bg-cover bg-center transition duration-500 group-hover:scale[...]
            <div className="p-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-2xl font-semibold text-white">These Are Not My Shoes</div>
                <span className="rounded-full bg-amber-300/15 px-3 py-1 text-sm font-semibold text-amber-200 animate-pulse">Fringe nominated</span>
              </div>
              <p className="mt-3 text-gray-300">Raw social commentary on absent fathers, brotherhood and township identity.</p>
              <div className="mt-5 inline-flex items-center gap-2 text-amber-300">Watch story and video<span aria-hidden>→</span></div>
            </div>
          </button>
          <button type="button" onClick={() => setPage('malepa')} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] text-left shadow-xl transition duration-300 hover:-trans[...]
            <div className="aspect-[4/3] bg-[url('https://res.cloudinary.com/doaj3nv5i/image/upload/v1771524922/uexdpbbkekxgf4rpo0qe.jpg')] bg-cover bg-center transition duration-500 group-hover:scale[...]
            <div className="p-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-2xl font-semibold text-white">Malepa The Musical</div>
                <span className="rounded-full bg-amber-300/15 px-3 py-1 text-sm font-semibold text-amber-200 animate-pulse">Large-scale musical</span>
              </div>
              <p className="mt-3 text-gray-300">A spiritual musical epic celebrating African ritual, resilience and ancestral power.</p>
              <div className="mt-5 inline-flex items-center gap-2 text-amber-300">Watch story and video<span aria-hidden>→</span></div>
            </div>
          </button>
          <button type="button" onClick={() => setPage('vanvuuren')} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] text-left shadow-xl transition duration-300 hover:-tr[...]
            <div className="aspect-[4/3] bg-[url('https://res.cloudinary.com/doaj3nv5i/image/upload/v1771522888/m3dxy1hmplpyrtqjgtpw.jpg')] bg-cover bg-center transition duration-500 group-hover:scale[...]
            <div className="p-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-2xl font-semibold text-white">Behind Van Vuuren's Farm</div>
                <span className="rounded-full bg-amber-300/15 px-3 py-1 text-sm font-semibold text-amber-200 animate-pulse">Intense drama</span>
              </div>
              <p className="mt-3 text-gray-300">A powerful drama by Mxolisi "The Great" Masilela confronting land, justice, identity and the lingering wounds of history.</p>
              <div className="mt-4 flex items-center gap-2 text-amber-200 text-sm">
                <span className="rounded-full bg-amber-300/15 px-2 py-1">Trailer</span>
                <span className="text-gray-400">https://res.cloudinary.com/doaj3nv5i/video/upload/v1781129269/azw5pmnfghc2oni6w1qo.mp4</span>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-amber-300">Watch story and video<span aria-hidden>→</span></div>
            </div>
          </button>
        </div>
      </Section>

      <Section id="philosophy">
        <h2 className="text-3xl font-playfair sparkle">Philosophy</h2>
        <blockquote className="mt-6 text-gray-200 italic text-xl">"Community theatre artists are servants of God. Our job is to heal, provoke, connect, and amplify voices the mainstream won't hear[...]
        <p className="mt-4 text-gray-300 max-w-3xl">He sees theatre as a mirror to the community and a tool for activism, healing, awareness, and social change. His work addresses teenage pregnancy, c[...]
      </Section>

      <Section id="press" className="bg-[#0b0b0b] rounded-3xl shadow-xl shadow-black/40">
        <h2 className="text-3xl font-playfair sparkle">Press & Awards</h2>
        <p className="mt-4 text-gray-300">Selected recognition includes Naledi Awards, Standard Bank Ovation, Mail & Guardian 200 Young South Africans 2025, ISPA Global Fellow, Market Theatre and Nati[...]</p>
        <a href="https://mg.co.za/friday/2026-06-19-they-didn-t-wait-for-an-invitation-they-built-the-table-themselves/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition">
          Read: "They Didn't Wait for an Invitation, They Built the Table Themselves" <span aria-hidden>→</span>
        </a>
      </Section>

      <Section id="contact">
        <h2 className="text-3xl font-playfair sparkle">Contact</h2>
        <div className="mt-6 max-w-xl text-gray-300 space-y-3">
          <div><strong>Email:</strong> info@thetxtheatre.com</div>
          <div><strong>Email (Mxolisi):</strong> mxolisi@thetxtheatre.com</div>
          <div><strong>WhatsApp:</strong> 071 514 2823</div>
          <div><strong>Address:</strong> Near Moses Molelekwa Community Centre, 10435 Winnie Mandela Zone 4, Tembisa</div>
        </div>
      </Section>

      <footer className="py-8 text-center text-gray-400">Tembisa → The World · IG @mxolisi_thegreat · @txtheatre</footer>
    </div>
  )
}

function Stat({title, caption}){
  return (
    <div className="rounded-3xl bg-white/5 p-6 border border-white/10">
      <div className="text-3xl font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm text-gray-400">{caption}</div>
    </div>
  )
}

function Card({title, subtitle, description, image}){
  return (
    <div className="overflow-hidden rounded-3xl bg-white/5 border border-white/10 shadow-sm">
      {image ? (
        <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
      ) : null}
      <div className="p-7">
        <div className="text-2xl font-semibold text-white">{title}</div>
        <p className="mt-3 text-gray-300 leading-relaxed">{subtitle}</p>
        {description ? <p className="mt-4 text-gray-300 leading-relaxed">{description}</p> : null}
      </div>
    </div>
  )
}
