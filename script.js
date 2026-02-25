import { resumeSvgData } from './svg-data.js';

const themes = [
    // --- ACCESSIBILITY THEMES (Sorted Alphabetically) ---
    {
        id: 'theme-deuteranopia',
        name: 'Deuteranopia (Green-Blind)',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.5 10.5l-3 -3" /><path d="M10.5 10.5l3 -3" /><path d="M12 21a9 9 0 0 1 -6.67 -15.083a2 2 0 0 1 2.628 -2.628a9 9 0 1 1 4.042 17.711z" /></svg>',
        metaColor: '#fffdf0'
    },
    {
        id: 'theme-high-contrast',
        name: 'High Contrast',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><circle cx="12" cy="12" r="9" /><path d="M12 3v18" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 3a9 9 0 0 1 0 18v-18" fill="currentColor"/></svg>',
        metaColor: '#000000'
    },
    {
        id: 'theme-monochrome',
        name: 'Monochrome',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 3v18" /><path d="M12 12l9 -9" /><path d="M12 12l9 9" /></svg>',
        metaColor: '#ffffff'
    },
    {
        id: 'theme-protanopia',
        name: 'Protanopia (Red-Blind)',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>',
        metaColor: '#f0f4f8'
    },
    {
        id: 'theme-tritanopia',
        name: 'Tritanopia (Blue-Blind)',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>',
        metaColor: '#ffeef0'
    },

    // --- STANDARD THEMES (Sorted Alphabetically) ---
    {
        id: 'theme-light',
        name: 'Classic Light',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>',
        metaColor: '#f3f5f8'
    },
    {
        id: 'theme-lavender-zen',
        name: 'Lavender Zen',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M12 15c-1.5 2.5 -4.5 3.5 -7 2c2.5 -1.5 3.5 -4.5 2 -7c1.5 2.5 4.5 3.5 7 2c-2.5 -1.5 -3.5 -4.5 -2 -7" /><path d="M12 9c1.5 -2.5 4.5 -3.5 7 -2c-2.5 1.5 -3.5 4.5 -2 7c-1.5 -2.5 -4.5 -3.5 -7 -2c2.5 1.5 3.5 4.5 2 7" /></svg>',
        metaColor: '#f3e5f5'
    },
    {
        id: 'theme-matcha-latte',
        name: 'Matcha Latte',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" /><path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M3 10h14v-3h-14z" /></svg>',
        metaColor: '#f4f5f0'
    },
    {
        id: 'theme-matte-dark',
        name: 'Matte Deep Grey',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>',
        metaColor: '#1a1a1f'
    },
    {
        id: 'theme-midnight-blue',
        name: 'Midnight Blue',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" /></svg>',
        metaColor: '#0b1120'
    },
    {
        id: 'theme-mint-calm',
        name: 'Mint Calm',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path d="M5 21c.5 -4.5 2.5 -8 7 -10" /><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" /></svg>',
        metaColor: '#e8f5e9'
    },
    {
        id: 'theme-rose-water',
        name: 'Rose Water',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" /><path d="M9 15a3 3 0 1 0 6 0" /><path d="M9 10a2 2 0 1 0 4 0" /></svg>',
        metaColor: '#fff1f2'
    },
    {
        id: 'theme-soft-slate',
        name: 'Soft Slate',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" /></svg>',
        metaColor: '#f8fafc'
    },
    {
        id: 'theme-sunset-vibe',
        name: 'Sunset Vibe',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" /><path d="M12 2v2" /><path d="M7 10l-2 -2" /><path d="M17 10l2 -2" /><path d="M12 17v7" /><path d="M8 21h8" /></svg>',
        metaColor: '#ebedee'
    },
    {
        id: 'theme-sepia',
        name: 'Vintage Sepia',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"><path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-14a2 2 0 0 0 -2 -2z" /><path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" /><path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" /><line x1="17" y1="17" x2="17" y2="17.01" /></svg>',
        metaColor: '#e6e0d3'
    }
];

let appliedThemeIndex = themes.findIndex(t => t.id === 'theme-light');
if (appliedThemeIndex === -1) appliedThemeIndex = 0; // fallback
const body = document.getElementById('app-body');
const dropdownMenu = document.getElementById('theme-dropdown-menu');
const currentThemeName = document.getElementById('current-theme-name');
const metaThemeColor = document.querySelector('meta[name="theme-color"]');
const themeSelectorContainer = document.querySelector('.theme-selector-container');
const themeTrigger = document.querySelector('.theme-selector-trigger');

// Render theme visually on the page
function applyTheme(themeObj) {
    body.className = themeObj.id;
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', themeObj.metaColor);
    }
}

// Update the selected UI state in the dropdown
function markActiveOption(index) {
    document.querySelectorAll('.theme-option').forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Populate the Dropdown Menu HTML
themes.forEach((theme, index) => {
    const btn = document.createElement('button');
    btn.className = 'theme-option';
    btn.innerHTML = `${theme.icon} <span>${theme.name}</span>`;

    // When strictly clicking, we commit to this theme
    btn.addEventListener('click', () => {
        appliedThemeIndex = index;
        currentThemeName.textContent = theme.name;
        applyTheme(theme);
        markActiveOption(index);
    });

    // When hovering over an option, live-preview it
    btn.addEventListener('mouseenter', () => {
        applyTheme(theme);
    });

    dropdownMenu.appendChild(btn);
});

// When the user stops hovering the options and leaves the menu...
// revert back to whatever theme was truly selected, ONLY if not force-opened
themeSelectorContainer.addEventListener('mouseleave', () => {
    if (!themeSelectorContainer.classList.contains('force-open')) {
        applyTheme(themes[appliedThemeIndex]);
    }
});

// Allow user to click to lock it open
themeTrigger.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent document click from firing immediately
    themeSelectorContainer.classList.toggle('force-open');
});

// Clicking anywhere else on the document closes the forced-open state
document.addEventListener('click', (e) => {
    if (!themeSelectorContainer.contains(e.target)) {
        themeSelectorContainer.classList.remove('force-open');
        applyTheme(themes[appliedThemeIndex]);
    }
});

// Force-download the PDF using fetch + blob (the `download` attr alone gets
// ignored by browsers when the server doesn't send Content-Disposition: attachment)
document.getElementById('download-pdf-btn').addEventListener('click', () => {
    const pdfUrl = 'resume/Ruthvik_Upputuri_Product_Management-ema.pdf';
    const fileName = 'Ruthvik_Upputuri_Product_Management-ema.pdf';
    fetch(pdfUrl)
        .then(res => res.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
        })
        .catch(err => console.error('PDF download failed:', err));
});

// Initial Setup
currentThemeName.textContent = themes[appliedThemeIndex].name;
applyTheme(themes[appliedThemeIndex]);
markActiveOption(appliedThemeIndex);

// Fetch and embed the SVG inline to allow advanced CSS manipulation
const resumeContainer = document.getElementById('resume-container');

try {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(resumeSvgData, 'image/svg+xml');
    const svgElement = svgDoc.documentElement;

    // Add class for styling and CSS filters
    svgElement.classList.add('resume-svg');

    // Remove white background rect/path if present
    const firstElements = svgElement.querySelectorAll('path, rect');
    for (let i = 0; i < Math.min(5, firstElements.length); i++) {
        const el = firstElements[i];
        const fill = el.getAttribute('fill') || '';
        const style = el.getAttribute('style') || '';
        if (fill.toLowerCase().includes('ffffff') || fill.toLowerCase() === 'white' ||
            style.toLowerCase().includes('fill:#ffffff') || style.toLowerCase().includes('fill:white')) {
            el.remove();
        }
    }

    resumeContainer.appendChild(svgElement);

    resumeContainer.appendChild(svgElement);

    // -- Make links clickable after it's in the live DOM --
    const svgtmp = resumeContainer.querySelector('svg');
    if (svgtmp) {
        // We know the links are specifically in `<text>` elements whose textContent contains these strings.
        const allTexts = svgtmp.querySelectorAll('text');

        allTexts.forEach(textEl => {
            const content = textEl.textContent.trim();
            let href = null;

            if (content.includes('ruthvik@upputuri.in')) {
                href = 'mailto:ruthvik@upputuri.in';
            } else if (content.includes('linkedin.upputuri.in')) {
                href = 'https://linkedin.upputuri.in';
            } else if (content === 'ruthvik' || content === 'upputuri' || (content === 'in' && textEl.innerHTML.includes('#0563c1')) || (content === '.' && textEl.innerHTML.includes('#0563c1'))) {
                // The website is split into multiple texts in the SVG: "ruthvik", ".", "upputuri", ".", "in".
                // We use the color #0563c1 to make sure we don't accidentally link random dots.
                href = 'https://ruthvik.upputuri.in';
            }

            if (href) {
                // Check if already wrapped
                if (textEl.parentNode.tagName.toLowerCase() !== 'a') {
                    const svgNS = 'http://www.w3.org/2000/svg';
                    const anchor = document.createElementNS(svgNS, 'a');
                    anchor.setAttribute('href', href);
                    anchor.setAttribute('target', '_blank');
                    anchor.setAttribute('rel', 'noopener noreferrer');
                    anchor.style.cursor = 'pointer';

                    // Add a hover effect class (optional, but good UX)
                    anchor.classList.add('resume-link');

                    textEl.parentNode.insertBefore(anchor, textEl);
                    anchor.appendChild(textEl);
                }
            }
        });

        // Handle the specific case where 'ruthvik', '.', 'upputuri', '.', 'in' are split across multiple <text> tags in the header
        // We can find them by looking for the specific blue fill color `#0563c1` in that specific area
        const blueTspans = svgtmp.querySelectorAll('tspan[fill="#0563c1"]');
        blueTspans.forEach(tspan => {
            const textEl = tspan.closest('text');
            if (!textEl) return;

            const content = tspan.textContent.trim();
            // Specifically targeting the website which is broken up horizontally
            const transform = textEl.getAttribute('transform') || '';
            const match = transform.match(/matrix\([^,]+,\s*[^,]+,\s*[^,]+,\s*[^,]+,\s*([^,]+),\s*([^)]+)\)/);

            if (match) {
                const x = parseFloat(match[1]);
                const y = parseFloat(match[2]);

                // The website is around y=80 and x > 400
                if (y > 75 && y < 85 && x > 400) {
                    if (textEl.parentNode.tagName.toLowerCase() !== 'a') {
                        const svgNS = 'http://www.w3.org/2000/svg';
                        const anchor = document.createElementNS(svgNS, 'a');
                        anchor.setAttribute('href', 'https://ruthvik.upputuri.in');
                        anchor.setAttribute('target', '_blank');
                        anchor.setAttribute('rel', 'noopener noreferrer');
                        anchor.style.cursor = 'pointer';
                        anchor.classList.add('resume-link');

                        textEl.parentNode.insertBefore(anchor, textEl);
                        anchor.appendChild(textEl);
                    }
                }
            }
        });
    }

} catch (err) {
    console.error('Error loading SVG:', err);
    resumeContainer.innerHTML = '<p style="color: red; text-align: center;">Failed to load resume SVG data. Error: ' + (err.message || err.toString()) + '</p>';
}
