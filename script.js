document.addEventListener('DOMContentLoaded', () => {

    // Initialize Animate on Scroll
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
    });

    // --- Dark Mode Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Check for saved theme in localStorage and apply it
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        // toggle the 'dark' class on the html element
        document.documentElement.classList.toggle('dark');

        // save the user's preference to localStorage
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });


    // --- FAQ Accordion ---
    const faqContainer = document.getElementById('faq-container');
    const faqs = [
        {
            question: "What is Netflix?",
            answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        },
        {
            question: "How much does Netflix cost?",
            answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs. 250 to Rs. 800 a month. No extra costs, no contracts."
        },
        {
            question: "Where can I watch?",
            answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
        },
        {
            question: "How do I cancel?",
            answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
        {
            question: "What can I watch on Netflix?",
            answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        }
    ];

    faqs.forEach(faq => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item', 'border-b-2', 'border-gray-200', 'dark:border-gray-800');

        faqItem.innerHTML = `
            <button class="faq-question w-full flex justify-between items-center text-left py-5 px-6">
                <span class="text-lg md:text-xl font-medium">${faq.question}</span>
                <span class="text-3xl">
                    <svg class="faq-icon-plus w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    <svg class="faq-icon-minus w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" /></svg>
                </span>
            </button>
            <div class="faq-answer max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                <div class="p-6 pt-0">
                    <p class="text-base md:text-lg">${faq.answer}</p>
                </div>
            </div>
        `;
        faqContainer.appendChild(faqItem);
    });
    
    // Add event listeners to the generated FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('open')) {
                    otherItem.classList.remove('open');
                    otherItem.querySelector('.faq-answer').style.maxHeight = '0px';
                }
            });

            // Toggle the clicked item
            item.classList.toggle('open');
            if (item.classList.contains('open')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0px';
            }
        });
    });
});