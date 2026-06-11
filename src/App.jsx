import React, { useState } from 'react'

function Hero({ onExplore }){
  return (
    <header className="relative overflow-hidden bg-[#090909]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.36em] text-gray-400">Portrait of a township theatre-maker</p>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight text-white">MXOLISI “THE GREAT” MASILELA</h1>
            <p className="max-w-2xl text-xl md:text-2xl text-gray-200">A South African theatre-maker, cultural entrepreneur and community leader who has anchored independent township storytelling from Tembisa to international stages.</p>
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

function BioPage({ onBack }){
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <header className="border-b border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-gray-400">Biography</p>
            <h1 className="text-4xl md:text-5xl font-serif text-white">Mxolisi “The Great” Masilela</h1>
          </div>
          <button onClick={onBack} className="text-amber-300 hover:text-white transition">Back to homepage</button>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle">Early Life & Personal Background</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Born in the Madelakufa informal settlement in Tembisa, Ekurhuleni, Gauteng, Mxolisi grew up facing significant challenges, including an absent father and a traumatic childhood. He has openly reflected on these experiences in interviews and his bio-documentary, noting how they shaped his commitment to healing through storytelling. As of the 2025 Mail & Guardian profile, he is 35 years old.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">At age nine, theatre entered his life when he secretly joined the Rutanang Community Theatre Project, later known as Sizimele Art Foundation. He hid his drama clothes in the doghouse to evade his mother's wishes for him to become a doctor. Early performances in community halls for around R3 taught him the power of relatable stories that could make audiences laugh or cry. He describes theatre as "all I know" and a transformative force that "created a good man" out of him.</p>
        </section>
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle">Education & Training</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">After Grade 12, Mxolisi trained formally at Windybrow Theatre’s performing arts program, where he honed his skills in performance, directing and storytelling. His training blends backyard community learning with formal structures, fueling his passion for mentorship and accessibility.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">He also gained international exposure through training or residencies linked to NIDA in Australia around 2018. He has served as a visiting artist and lecturer in collaborations with institutions such as the University of Michigan and University of California on international projects.</p>
        </section>
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle">Artistic Philosophy & Impact</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Mxolisi views theatre as a mirror to the community, a tool for activism, healing, awareness, and social change. He addresses teenage pregnancy, crime, violence, HIV/AIDS, politics, liberation struggles, land and identity, emotions, spirituality, and decolonization without boundaries.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">He believes community theatre artists are "servants of God" chosen to serve and heal. Storytelling connects, inspires, provokes, and amplifies unheard township voices. He believes excellence can emerge from townships when supported, and he champions entrepreneurship, sustainability, and access through sponsored community experiences.</p>
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
            <h1 className="text-4xl md:text-5xl font-playfair text-amber-300">My Name is Mxolisi “The Great” Masilela</h1>
          </div>
          <button onClick={onBack} className="text-amber-300 hover:text-white transition">Back to homepage</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] items-start">
            <div>
              <h2 className="text-3xl font-playfair sparkle text-amber-300">This is My Full Story</h2>
              <p className="mt-6 text-gray-300 leading-relaxed">I was born in the Madelakufa informal settlement in Tembisa, Ekurhuleni, Gauteng. Life was raw and unforgiving. My childhood carried deep trauma — an absent father, nights of fear, and moments of violence that still live in my bones.</p>
              <p className="mt-4 text-gray-300 leading-relaxed">I remember walking in the middle of the night with my mother to family in Stama, her holding my hand and my younger brother Timbal’s. I once saw a man being slaughtered; that image haunted me until my mother explained it years later before she passed. Those experiences shaped everything I create. Theatre became my refuge, my healing, and my purpose.</p>
              <p className="mt-4 text-gray-300 leading-relaxed">At around nine or ten years old (early 2000s), I secretly joined the Rutanang Community Theatre Project (later part of Sizimele Art Foundation). I hid my drama clothes in the doghouse so my mother wouldn’t know — she dreamed of me becoming a doctor. I’d leave in my school uniform, change for rehearsals in community halls, and perform for our people at just R3 a ticket. They laughed, they cried, they saw themselves. That’s when I understood: stories from the township could change lives. Theatre didn’t just choose me — it saved me and made me the man I am.</p>
            </div>
            <div className="overflow-hidden rounded-3xl bg-[#111] shadow-xl">
              <img src="https://res.cloudinary.com/doaj3nv5i/image/upload/v1781133877/lhzkgp82n7tmgyf6r9vu.jpg" alt="Mxolisi The Great autobiographical portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Becoming an Artist and a Father</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">In Grade 10, I wrote and directed my first play, Dropping in the Heart, about the clash between parental expectations and a child’s true calling. After Grade 12, I trained at Windybrow Theatre’s performing arts programme, building my foundation in acting, directing, and playwriting.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">I began creating urgently — often with all-female or all-male casts — to tell honest stories about identity, pain, and resilience.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">I am a husband and a father. I have a daughter who is my greatest motivation and responsibility. In reflections on fatherhood and absent fathers, I have said publicly: “I don’t want to be one of the things my daughter has to heal from.” This drives me daily — to break cycles, to be present, and to build something lasting for her and the next generation.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">My marriage and family life are sacred; I speak often about love, commitment, and brotherhood in podcasts and dialogues, including heartfelt conversations with my brother-in-arts Masai Sepuru.</p>
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
          <p className="mt-4 text-gray-300 leading-relaxed">Then came deeper works: Insanity, Exhibition (men’s emotions), Medumo ya Borwa (Ovation recognition), Walls & Pillows, These Are Not My Shoes (absent fathers, brotherhood, Naledi-nominated), LEINA (The Name) — my spiritual labour of love inspired by my mother’s passing, exploring ancestry, names, and reincarnation (4 Naledi nominations, tours to Joburg Theatre, National Arts Festival, Mozambique). Behind Van Vuuren’s Farm confronts land, racial injustice, and farm killings. Malepa The Musical celebrates authentic African spirituality and Ukuthwasa. Uncharted — published in the Writers’ Lab anthology — dives into love, rape, mental illness, trauma, passion, and ruin.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">I have also acted on stage and in the Mzansi Magic series Stash.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">The TX Theatre – My Greatest Legacy</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">In 2008, at age 17, I founded TX Theatre Productions. The physical dream became reality with The TX Theatre — a 100-seater hub near Moses Molelekwa Arts Centre in Tembisa at 28 Star Street / Andrew Mapheto Drive.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">It is a professional home staging around 50 shows yearly, mentoring talent, and bridging township to mainstream stages. It is holy ground.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">Through it, I lead Tembisa Theatre Week (10th edition in 2026), Kuwamba National Women’s Theatre Festival, training programmes, awards, and more. Partnerships include Market Theatre, National Arts Festival, University of Michigan lectures, and international tours.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">The Writers’ Lab – Nurturing New Voices</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">The Writers’ Lab (or Writers Lab SA / Pretoria) is a vital partner and extension of our work at TX Theatre. Together, we run workshops, script development, readings, mentorship, stage-to-screen programmes (funded by the National Arts Council), and the Hauntings Young Directors Project.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">We publish anthologies like "A Gathering of Stories" (launched with readings at TX Theatre and Johannesburg), which includes my play Uncharted alongside works by Eddie Thaba, Katlego Chale, Dr. Refiloe Lepere, Ronald Manganye, and others. We support emerging writers with open calls, premieres (e.g., Olivia Fischer’s Still), and pathways to full production. This is how we ensure the next generation doesn’t have to fight as hard as I did.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Brothers, Collaborators, and Friends</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Theatre is family. My long-time partner and business collaborator is Mongezi Mabunda — we’ve built so much together. Close creatives include Gifter Ngobeni (associate Artistic Director, powerful performer), Tswarelo / Tshwarelo Selolo, Sizwe Ndabane, Precious Mashishi/Mashasha, choreographers like Sfiso “Bheseni” Botha, musicians across productions, and many more who have become brothers and sisters in the craft.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">Dialogues with Masai Sepuru on love, marriage, fatherhood, and art have been profound. The TX family — from emerging artists to veterans — is my extended circle. We lift each other.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Recognition and Ongoing Journey</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">I am a 2025 ISPA Global Fellow, featured in Mail & Guardian’s 200 Young South Africans, multiple Naledi Award recipient (productions and innovation), and more. There is a bio-documentary, MXOLISI MASILELA: THE GREAT.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">I continue writing new plays (including one about prayer and men kneeling), curating festivals, advocating for funding and transport support for National Arts Festival, and pushing for a full TX Theatre Academy.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">I am a philanthropist, facilitator, curator, producer, and entrepreneur in the arts. I believe artists are servants chosen to heal, provoke, and remember. We address everything — trauma, spirituality, land, identity, politics — without apology. From Madelakufa to global stages, I carry Tembisa in my heart.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">My daughter, my wife, my family, my brothers in the arts, and the communities we serve keep me grounded. I refuse to pass on unbroken cycles. The story is still being written — in every new production, every young voice amplified at TX Theatre, and every audience member who leaves transformed.</p>
          <p className="mt-4 text-amber-200 font-semibold">Woz’obloma nathi — Come and bloom with us.</p>
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
          <button onClick={onBack} className="text-amber-300 hover:text-white transition">Back to homepage</button>
        </div>
      </header>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/doaj3nv5i/image/upload/v1781123937/xigecnmgijjnmhhydkyf.jpg')] bg-cover bg-center opacity-90" />
        <div className="relative max-w-6xl mx-auto px-6 py-28">
          <p className="text-sm uppercase tracking-[0.36em] text-gray-200">Founded by TX Theatre Productions</p>
          <h2 className="mt-4 text-5xl md:text-6xl font-playfair text-amber-200 sparkle">A flagship festival for township storytelling</h2>
          <p className="mt-6 max-w-3xl text-gray-200">Tembisa Theatre Week is an annual celebration of independent theatre makers, new plays and community creativity. It brings together emerging and established artists, affordable access for locals, and a bold platform for stories from Tembisa and beyond.</p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">History and Vision</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Founded around 2017, the first edition of Tembisa Theatre Week ran from 21–29 January 2017 with 13 new theatre productions premiering. By 2026 it had grown into a milestone 10th edition, celebrating "10 Years of bold, powerful storytelling."</p>
          <p className="mt-4 text-gray-300 leading-relaxed">Mxolisi describes the festival as a collective artistic vision rooted in community, bridging township creativity with broader recognition while keeping talent and success close to home.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Purpose and Impact</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">The festival showcases new and original productions, often around 10 plays per edition, alongside dance, music and interdisciplinary works. It supports emerging directors, writers, actors and creatives from Tembisa, Sebokeng, Johannesburg and Pretoria, building audience development through affordable, community-centred live performance.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">Sponsored and low-cost tickets ensure broad attendance, bringing the local community together under the rallying cry "Woz’bloma nathi!" – Come and bloom with us.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Format and Activities</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">The festival typically runs for about a week in January or February at The TX Theatre in the Moses Molelekwa Community Centre area. It includes daily performances, premieres, workshops, discussions and closing events, with open calls for new productions and strong community engagement.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">Many productions from Tembisa Theatre Week go on to further recognition, touring to places like Market Theatre, the National Arts Festival, Joburg Theatre, and international stages.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Recent Editions</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">The 10th edition in 2026 was a major milestone celebration with open calls for 10 new productions and strong sponsorship support. The 2025 edition was described as a week of electrifying performances, bold storytelling, and groundbreaking theatre.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">This festival complements other TX Theatre initiatives, including the Kuwamba National Women’s Theatre Festival, and forms part of Mxolisi’s broader ecosystem of community-driven arts entrepreneurship.</p>
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
          <button onClick={onBack} className="text-amber-300 hover:text-white transition">Back to homepage</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] items-start">
            <div>
              <h2 className="text-3xl font-playfair sparkle text-amber-300">Background and Creation</h2>
              <p className="mt-6 text-gray-300 leading-relaxed">LEINA is a powerful, spiritually resonant theatre production written and directed by Mxolisi “The Great” Masilela. Produced by The TX Theatre in Tembisa, it stands as one of his most acclaimed and personal works, blending ritual, music, prayer, and ancestral themes.</p>
              <p className="mt-4 text-gray-300 leading-relaxed">The concept emerged shortly before the passing of his beloved mother. Mxolisi describes it as a labour of love and spirituality, exploring names, clan identity, legacy, and the deep connection between names, ancestry, and spiritual continuity.</p>
            </div>
            <div className="overflow-hidden rounded-3xl bg-[#111] shadow-xl">
              <img src="https://res.cloudinary.com/doaj3nv5i/image/upload/v1781125171/drbn5clwhy8fhhy9h4ys.jpg" alt="LEINA production image" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Core Themes</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Names are presented as carriers of spirituality, legacy, ritual and ancestral memory. The piece explores reincarnation through names, linking past and present, healing and cultural continuity.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">It draws on African ritual performance, music and prayer, influenced by Mxolisi’s NIDA training on Ritual as Performance, creating a rich, immersive theatrical experience.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Production Details</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Writer & Director: Mxolisi “The Great” Masilela. Production Manager: Precious Mashishi. Lighting & Sound Design: Sizwe Ndabane.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">Key cast includes Tswarelo “Ntate” Selolo, Gifter Ngobeni, Mongezi Mabunda, and others. Musicians and choir members include Amanda Khumalo, Sibahle Zongezile, Nkosana Maphanga, Kelebogile Nkwana, Muzi Shili and Nonhlahla Dube.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">Duration: Approximately 50 minutes. Target audience: 16+ due to spiritual and emotional depth.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Awards and Impact</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">LEINA received four nominations at the 2024 Naledi Theatre Awards: Best Production of a Play, Lead Actor Male, Supporting Actor Male, and Ensemble/Choir recognition. It has earned praise for its spiritual depth, music and ensemble storytelling.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">The production reinforces Mxolisi’s philosophy of theatre as holy ground for healing, cultural reconnection and amplifying township voices.</p>
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
          <button onClick={onBack} className="text-amber-300 hover:text-white transition">Back to homepage</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] items-start">
            <div>
              <h2 className="text-3xl font-playfair sparkle text-amber-300">Themes and Synopsis</h2>
              <p className="mt-6 text-gray-300 leading-relaxed">These Are Not My Shoes centers on two brothers, Themba and Xolani, whose father disappears from their lives. It explores the emotional cost of absent fathers, the search for identity, masculinity and purpose in township communities.</p>
              <p className="mt-4 text-gray-300 leading-relaxed">The shoe imagery becomes a core metaphor for inheritance, fitting into roles not meant for you, and the burdens passed down — or abandoned — by previous generations.</p>
            </div>
            <div className="overflow-hidden rounded-3xl bg-[#111] shadow-xl">
              <img src="https://res.cloudinary.com/doaj3nv5i/image/upload/v1781126359/jcskauagiy2htplnrdyr.jpg" alt="These Are Not My Shoes production image" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Production Details</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Writer & Director: Mxolisi “The Great” Masilela. Key cast includes Tshwarelo Selolo, Mongezi Mabunda, Thabang Chauke, and Itumeleng Moeketsi. Performers in later runs also included Wendy Mrali, Khanyisa James, Sonwabo Mphandle, Seko Ntshaba, Molupi Lepeli, Zanokhanyo Salman and Aphelele Ngqwangi.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">Live music and ensemble performance are central to the play’s emotional power, with musicians and performers creating a raw, immersive atmosphere.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">Run length: 50–70 minutes. Style: dramatic, musical, ritualistic and physically charged, with a deep focus on authenticity and community storytelling.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Performance History</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">The play premiered at TX Theatre and has been staged strongly during Tembisa Theatre Week, Joburg Theatre, Artscape and festivals like Baxter Zabalaza. It has also toured regionally with productions in Mozambique and other Gauteng venues.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">This piece remains one of Mxolisi’s most performed works, praised for its social commentary, realism and ensemble strength.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Awards and Recognition</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">These Are Not My Shoes earned a Naledi nomination for Best Independent/Fringe Theatre Production and has been praised for its heart-wrenching authenticity and powerful ensemble performance.</p>
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
          <button onClick={onBack} className="text-amber-300 hover:text-white transition">Back to homepage</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] items-start">
            <div>
              <h2 className="text-3xl font-playfair sparkle text-amber-300">Synopsis and Themes</h2>
              <p className="mt-6 text-gray-300 leading-relaxed">Malepa The Musical tells the story of a secret society in the north of South Africa. It celebrates authentic African spiritual traditions and ancestral connection through music, dance, ritual and powerful storytelling.</p>
              <p className="mt-4 text-gray-300 leading-relaxed">Malepa is a hidden village between mountains, inhabited by supernatural people who live by night and are visible only to those with a healing gift. The narrative focuses on spirituality, identity, resilience and the intersection of visible and invisible worlds.</p>
            </div>
            <div className="overflow-hidden rounded-3xl bg-[#111] shadow-xl">
              <img src="https://res.cloudinary.com/doaj3nv5i/image/upload/v1771524922/uexdpbbkekxgf4rpo0qe.jpg" alt="Malepa The Musical image" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Creative Team</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Writer & Director: Mxolisi “The Great” Masilela. Choreography by Sfiso “Bheseni” Botha with Muzi Shili. Music composition and direction by Mongezi Mabunda, supported by ensemble vocalists and composers.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">Produced by The TX Theatre in collaboration with Umzekelo Cultural Organisation, the production is praised for its technical excellence in lighting, costumes, sound and stage design.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Performance History</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Malepa premiered at TX Theatre in Tembisa around September 2022 and was presented as a major community and cultural event. It has been revived in later years and promoted as one of Mxolisi’s biggest productions.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">The show stands alongside works like LEINA, These Are Not My Shoes, Behind Van Vuuren’s Farm and Adam’s Ale, reflecting Mxolisi’s versatility in moving between intimate drama and grand musical storytelling.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Significance</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Malepa exemplifies Mxolisi’s philosophy of theatre as holy ground, honoring African traditions while challenging misconceptions about spirituality. It amplifies township voices and celebrates ancestral resilience with ritualistic performance and rich musicality.</p>
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
            <h1 className="text-4xl md:text-5xl font-playfair text-amber-300 sparkle">Behind Van Vuuren’s Farm</h1>
          </div>
          <button onClick={onBack} className="text-amber-300 hover:text-white transition">Back to homepage</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] items-start">
            <div>
              <h2 className="text-3xl font-playfair sparkle text-amber-300">Synopsis and Themes</h2>
              <p className="mt-6 text-gray-300 leading-relaxed">Set on the boundary of Limpopo, the play centers on Van Vuuren’s farm — a malevolent playground where white power, land control and violence shape the lives of a Black family seeking survival.</p>
              <p className="mt-4 text-gray-300 leading-relaxed">The story follows a family whose hopes are crushed by oppression, with the mother holding fast to education and the possibility of freedom while the farm becomes a site of terror and tragic loss.</p>
            </div>
            <div className="overflow-hidden rounded-3xl bg-[#111] shadow-xl">
              <img src="https://res.cloudinary.com/doaj3nv5i/image/upload/v1771522888/m3dxy1hmplpyrtqjgtpw.jpg" alt="Behind Van Vuuren's Farm production image" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Production Details</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Writer & Director: Mxolisi “The Great” Masilela. Produced by The TX Theatre Hub, the production explores racial injustice, farmworker exploitation and the blood-soaked history of land ownership in South Africa.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">Featured cast includes Gifter Ngobeni and Tshwarelo Selolo, bringing raw, emotionally charged performances to a work that is both urgent and unflinching.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">Style: intense dramatic theatre with strong physicality, ritual undertones and a relentless focus on family trauma, resilience and the search for justice.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Performance History</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Performed at The TX Theatre in Tembisa and featured during Tembisa Theatre Week, the production also reached city audiences through Joburg Theatre and the Market Theatre.</p>
          <p className="mt-4 text-gray-300 leading-relaxed">It is part of Mxolisi’s broader work in township storytelling, standing alongside LEINA, These Are Not My Shoes and Malepa as a powerful piece of socially engaged theatre.</p>
        </section>

        <section className="rounded-3xl bg-[#0f0f0f] p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-playfair sparkle text-amber-300">Significance</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">Behind Van Vuuren’s Farm is an unflinching cry against ongoing violence, systemic oppression and the silence around farmworker suffering. It reinforces Mxolisi’s focus on theatre as activism and healing.</p>
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
            <p className="mt-6 text-gray-300 leading-relaxed">My Name is Mxolisi “The Great” Masilela. This is my full story — from Madelakufa to founding TX Theatre, building festivals, mentoring new voices, and carrying Tembisa to the world.</p>
            <button type="button" onClick={() => setPage('autobio')} className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-300/10 px-6 py-3 text-amber-200 hover:bg-amber-300/20 transition">Meet The Great</button>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
            <img src="https://res.cloudinary.com/doaj3nv5i/image/upload/v1781133877/lhzkgp82n7tmgyf6r9vu.jpg" alt="Mxolisi The Great Masilela" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      <Section id="hub">
        <h2 className="text-3xl font-playfair sparkle">TX Theatre Production</h2>
        <p className="mt-4 text-gray-300 max-w-3xl">Founded around 2008, TX Theatre in Tembisa is a 100-seater rehearsal, workshop, festival and development hub staging 50+ shows annually. The venue supports township artists and bridges community stories with mainstream and global audiences.</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><strong>15+ Years</strong><div className="text-sm text-gray-400">of practice</div></div>
          <div><strong>50 Shows/Year</strong><div className="text-sm text-gray-400">theatre, music, poetry</div></div>
          <div><strong>Naledi Noms</strong><div className="text-sm text-gray-400">national recognition</div></div>
          <div><strong>ISPA Fellow 2025</strong><div className="text-sm text-gray-400">global exchange</div></div>
        </div>
        <div className="mt-10 rounded-3xl bg-white/5 p-8 border border-white/10 shadow-xl">
          <h3 className="text-3xl font-playfair sparkle text-amber-300">Tembisa Theatre Week</h3>
          <p className="mt-4 text-gray-300 max-w-3xl">Annual flagship festival curated by Mxolisi “The Great” Masilela through The TX Theatre. Click to explore the story and impact behind this township theatre celebration.</p>
          <button type="button" onClick={() => setPage('ttw')} className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-300/10 px-6 py-3 text-amber-200 hover:bg-amber-300/20 transition">Explore TTW</button>
        </div>
      </Section>

      <Section id="productions" className="bg-[#0b0b0b] rounded-3xl shadow-xl shadow-black/40">
        <h2 className="text-3xl font-playfair sparkle">Productions Spotlight</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <button type="button" onClick={() => setPage('leina')} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] text-left shadow-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/5">
            <div className="aspect-[4/3] bg-[url('https://res.cloudinary.com/doaj3nv5i/image/upload/v1781125171/drbn5clwhy8fhhy9h4ys.jpg')] bg-cover bg-center transition duration-500 group-hover:scale-105" />
            <div className="p-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-2xl font-semibold text-white">LEINA (The Name)</div>
                <span className="rounded-full bg-amber-300/15 px-3 py-1 text-sm font-semibold text-amber-200 animate-pulse">Naledi nominated</span>
              </div>
              <p className="mt-3 text-gray-300">Labour of love and spirituality — 4 Naledi nominations.</p>
              <div className="mt-5 inline-flex items-center gap-2 text-amber-300">Watch story and video<span aria-hidden>→</span></div>
            </div>
          </button>
          <button type="button" onClick={() => setPage('shoes')} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] text-left shadow-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/5">
            <div className="aspect-[4/3] bg-[url('https://res.cloudinary.com/doaj3nv5i/image/upload/v1781126359/jcskauagiy2htplnrdyr.jpg')] bg-cover bg-center transition duration-500 group-hover:scale-105" />
            <div className="p-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-2xl font-semibold text-white">These Are Not My Shoes</div>
                <span className="rounded-full bg-amber-300/15 px-3 py-1 text-sm font-semibold text-amber-200 animate-pulse">Fringe nominated</span>
              </div>
              <p className="mt-3 text-gray-300">Raw social commentary on absent fathers, brotherhood and township identity.</p>
              <div className="mt-5 inline-flex items-center gap-2 text-amber-300">Watch story and video<span aria-hidden>→</span></div>
            </div>
          </button>
          <button type="button" onClick={() => setPage('malepa')} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] text-left shadow-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/5">
            <div className="aspect-[4/3] bg-[url('https://res.cloudinary.com/doaj3nv5i/image/upload/v1771524922/uexdpbbkekxgf4rpo0qe.jpg')] bg-cover bg-center transition duration-500 group-hover:scale-105" />
            <div className="p-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-2xl font-semibold text-white">Malepa The Musical</div>
                <span className="rounded-full bg-amber-300/15 px-3 py-1 text-sm font-semibold text-amber-200 animate-pulse">Large-scale musical</span>
              </div>
              <p className="mt-3 text-gray-300">A spiritual musical epic celebrating African ritual, resilience and ancestral power.</p>
              <div className="mt-5 inline-flex items-center gap-2 text-amber-300">Watch story and video<span aria-hidden>→</span></div>
            </div>
          </button>
          <button type="button" onClick={() => setPage('vanvuuren')} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] text-left shadow-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/5">
            <div className="aspect-[4/3] bg-[url('https://res.cloudinary.com/doaj3nv5i/image/upload/v1771522888/m3dxy1hmplpyrtqjgtpw.jpg')] bg-cover bg-center transition duration-500 group-hover:scale-105" />
            <div className="p-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-2xl font-semibold text-white">Behind Van Vuuren’s Farm</div>
                <span className="rounded-full bg-amber-300/15 px-3 py-1 text-sm font-semibold text-amber-200 animate-pulse">Intense drama</span>
              </div>
              <p className="mt-3 text-gray-300">A powerful drama by Mxolisi “The Great” Masilela confronting land, justice, identity and the lingering wounds of history.</p>
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
        <blockquote className="mt-6 text-gray-200 italic text-xl">“Community theatre artists are servants of God. Our job is to heal, provoke, connect, and amplify voices the mainstream won’t hear.”</blockquote>
        <p className="mt-4 text-gray-300 max-w-3xl">He sees theatre as a mirror to the community and a tool for activism, healing, awareness, and social change. His work addresses teenage pregnancy, crime, violence, HIV/AIDS, politics, liberation, land and identity, emotions, spirituality and decolonization.</p>
      </Section>

      <Section id="press" className="bg-[#0b0b0b] rounded-3xl shadow-xl shadow-black/40">
        <h2 className="text-3xl font-playfair sparkle">Press & Awards</h2>
        <p className="mt-4 text-gray-300">Selected recognition includes Naledi Awards, Standard Bank Ovation, Mail & Guardian 200 Young South Africans 2025, ISPA Global Fellow, Market Theatre and National Arts Festival features.</p>
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
