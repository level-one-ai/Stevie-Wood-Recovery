// Stevie Wood Recovery - page behaviour
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".site-header");
    var hero = document.getElementById("hero");
    var heroButtons = document.querySelector(".hero-buttons");
    var stickyCall = document.getElementById("stickyCall");
    var whatsappWidgetBtn = document.getElementById("whatsappWidgetBtn");

    // Header background, floating WhatsApp button and sticky call bar,
    // driven by IntersectionObserver instead of a scroll listener
    if ("IntersectionObserver" in window) {
        // A 1px marker 40px down the page: once it leaves the screen, darken the header
        var topMarker = document.createElement("div");
        topMarker.setAttribute("aria-hidden", "true");
        topMarker.style.cssText = "position:absolute;top:40px;left:0;width:1px;height:1px;pointer-events:none;";
        document.body.appendChild(topMarker);
        new IntersectionObserver(function(entries) {
            header.classList.toggle("scrolled", !entries[0].isIntersecting);
        }).observe(topMarker);

        new IntersectionObserver(function(entries) {
            whatsappWidgetBtn.classList.toggle("visible", !entries[0].isIntersecting);
        }).observe(hero);

        new IntersectionObserver(function(entries) {
            var gone = !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
            stickyCall.classList.toggle("visible", gone);
        }).observe(heroButtons);
    } else {
        header.classList.add("scrolled");
        whatsappWidgetBtn.classList.add("visible");
        stickyCall.classList.add("visible");
    }

    // Highlight the nav link for the section on screen
    var navLinks = document.querySelectorAll(".main-nav a");
    var sections = [];
    navLinks.forEach(function(link) {
        var target = document.querySelector(link.getAttribute("href"));
        if (target) sections.push({ link: link, el: target });
    });

    if ("IntersectionObserver" in window) {
        var navObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (!entry.isIntersecting) return;
                navLinks.forEach(function(l) { l.classList.remove("active"); });
                sections.forEach(function(s) {
                    if (s.el === entry.target) s.link.classList.add("active");
                });
            });
        }, { rootMargin: "-45% 0px -50% 0px" });
        sections.forEach(function(s) { navObserver.observe(s.el); });

        // Fade sections in as they arrive
        var revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: "0px 0px -10% 0px" });
        document.querySelectorAll(".reveal").forEach(function(el) { revealObserver.observe(el); });
    } else {
        document.querySelectorAll(".reveal").forEach(function(el) { el.classList.add("is-visible"); });
    }

    // Mobile Menu
    var mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    var mobileNav = document.getElementById("mobileNav");
    var mobileNavClose = document.getElementById("mobileNavClose");

    function openMobileMenu() {
        mobileNav.classList.add("active");
        mobileMenuBtn.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
    }

    function closeMobileMenu() {
        mobileNav.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    }

    mobileMenuBtn.addEventListener("click", openMobileMenu);
    mobileNavClose.addEventListener("click", closeMobileMenu);
    mobileNav.querySelectorAll("a, button[data-open-widget]").forEach(function(link) {
        link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && mobileNav.classList.contains("active")) {
            closeMobileMenu();
        }
    });

    // Gallery: arrow buttons scroll the row
    var galleryTrack = document.getElementById("galleryTrack");
    document.querySelectorAll(".gallery-btn").forEach(function(btn) {
        btn.addEventListener("click", function() {
            var card = galleryTrack.querySelector(".gallery-card");
            var step = card ? card.offsetWidth + 20 : 300;
            galleryTrack.scrollBy({ left: btn.dataset.dir === "next" ? step : -step, behavior: "smooth" });
        });
    });

    // Image Popup (click on a gallery photo)
    var imagePopup = document.getElementById("imagePopup");
    var imagePopupClose = document.getElementById("imagePopupClose");
    var popupImage = document.getElementById("popupImage");
    var popupTitle = document.getElementById("popupTitle");
    var popupDesc = document.getElementById("popupDesc");

    function openImagePopup(imageSrc, alt, title, desc) {
        popupImage.src = imageSrc;
        popupImage.alt = alt;
        popupTitle.textContent = title;
        popupDesc.textContent = desc;
        imagePopup.classList.add("active");
        document.body.style.overflow = "hidden";
        imagePopupClose.focus();
    }

    function closeImagePopup() {
        imagePopup.classList.remove("active");
        document.body.style.overflow = "";
    }

    document.querySelectorAll(".gallery-card button").forEach(function(btn) {
        btn.addEventListener("click", function() {
            var img = btn.querySelector("img");
            openImagePopup(img.currentSrc || img.src, img.alt, btn.querySelector("h3").textContent, btn.querySelector("p").textContent);
        });
    });

    imagePopupClose.addEventListener("click", closeImagePopup);

    imagePopup.addEventListener("click", function(e) {
        if (e.target === imagePopup) {
            closeImagePopup();
        }
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && imagePopup.classList.contains("active")) {
            closeImagePopup();
        }
    });

    // WhatsApp Widget
    var whatsappWidgetPanel = document.getElementById("whatsappWidgetPanel");
    var widgetCloseBtn = document.getElementById("widgetCloseBtn");
    var widgetOverlay = document.getElementById("widgetOverlay");

    var WHATSAPP_NUMBER = "447934015448";

    function openWidget() {
        whatsappWidgetPanel.classList.add("active");
        widgetOverlay.classList.add("active");
        whatsappWidgetBtn.style.opacity = "0";
        whatsappWidgetBtn.style.visibility = "hidden";
        document.body.classList.add("widget-open");
        document.getElementById("widgetName").focus();
    }

    function closeWidget() {
        whatsappWidgetPanel.classList.remove("active");
        widgetOverlay.classList.remove("active");
        whatsappWidgetBtn.style.opacity = "";
        whatsappWidgetBtn.style.visibility = "";
        document.body.classList.remove("widget-open");
    }

    whatsappWidgetBtn.addEventListener("click", openWidget);
    widgetCloseBtn.addEventListener("click", closeWidget);
    widgetOverlay.addEventListener("click", closeWidget);

    // Every "Request a Recovery" / "Get a Free Quote" button opens the widget
    document.querySelectorAll("[data-open-widget]").forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            openWidget();
        });
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && whatsappWidgetPanel.classList.contains("active")) {
            closeWidget();
        }
    });

    // Widget form validation
    var widgetForm = document.getElementById("widgetForm");
    var widgetSubmitBtn = document.getElementById("widgetSubmitBtn");
    var widgetName = document.getElementById("widgetName");
    var widgetPhone = document.getElementById("widgetPhone");
    var widgetLocation = document.getElementById("widgetLocation");
    var widgetService = document.getElementById("widgetService");

    function checkFormValidity() {
        var isValid = widgetName.value.trim() !== "" &&
                      widgetPhone.value.trim() !== "" &&
                      widgetLocation.value.trim() !== "" &&
                      widgetService.value !== "";

        if (isValid) {
            widgetSubmitBtn.classList.add("ready");
            widgetSubmitBtn.disabled = false;
        } else {
            widgetSubmitBtn.classList.remove("ready");
            widgetSubmitBtn.disabled = true;
        }
    }

    widgetName.addEventListener("input", checkFormValidity);
    widgetPhone.addEventListener("input", checkFormValidity);
    widgetLocation.addEventListener("input", checkFormValidity);
    widgetService.addEventListener("change", checkFormValidity);

    // Widget form submission - open WhatsApp
    widgetForm.addEventListener("submit", function(e) {
        e.preventDefault();

        var message = "🚗 *QUOTE REQUEST*\n\n";
        message += "👤 *Name:* " + widgetName.value + "\n";
        message += "📞 *Phone:* " + widgetPhone.value + "\n";
        message += "📍 *Location:* " + widgetLocation.value + "\n";

        var destination = document.getElementById("widgetDestination").value;
        if (destination) {
            message += "🏁 *Destination:* " + destination + "\n";
        }

        var vehicle = document.getElementById("widgetVehicle").value;
        if (vehicle) {
            message += "🚙 *Vehicle:* " + vehicle + "\n";
        }

        message += "🔧 *Service:* " + widgetService.value + "\n";

        var additionalMessage = document.getElementById("widgetMessage").value;
        if (additionalMessage) {
            message += "💬 *Message:* " + additionalMessage + "\n";
        }

        var whatsappUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
        window.open(whatsappUrl, "_blank");

        closeWidget();
        widgetForm.reset();
        checkFormValidity();
    });

    // Widget address autocomplete (OpenStreetMap)
    var debounceTimer;

    function setupWidgetAutocomplete(input, resultsContainer) {
        input.addEventListener("input", function() {
            clearTimeout(debounceTimer);
            var query = input.value.trim();

            if (query.length < 3) {
                resultsContainer.classList.remove("active");
                return;
            }

            debounceTimer = setTimeout(function() {
                var url = "https://nominatim.openstreetmap.org/search?format=json&q=" + encodeURIComponent(query + ", Edinburgh, UK") + "&limit=5&addressdetails=1";

                fetch(url, { headers: { "Accept": "application/json" } })
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    resultsContainer.innerHTML = "";

                    if (data.length > 0) {
                        data.forEach(function(place) {
                            var item = document.createElement("div");
                            item.className = "widget-autocomplete-item";
                            var icon = document.createElement("i");
                            icon.className = "fas fa-map-marker-alt";
                            item.appendChild(icon);
                            item.appendChild(document.createTextNode(place.display_name));
                            item.addEventListener("click", function() {
                                input.value = place.display_name;
                                resultsContainer.classList.remove("active");
                                checkFormValidity();
                            });
                            resultsContainer.appendChild(item);
                        });
                        resultsContainer.classList.add("active");
                    } else {
                        resultsContainer.classList.remove("active");
                    }
                })
                .catch(function(error) {
                    console.log("Autocomplete error:", error);
                    resultsContainer.classList.remove("active");
                });
            }, 300);
        });

        document.addEventListener("click", function(e) {
            if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
                resultsContainer.classList.remove("active");
            }
        });
    }

    setupWidgetAutocomplete(document.getElementById("widgetLocation"), document.getElementById("widgetLocationResults"));
    setupWidgetAutocomplete(document.getElementById("widgetDestination"), document.getElementById("widgetDestinationResults"));

    // Legal Popups
    function setupLegalPopup(linkId, popupId, closeId) {
        var link = document.getElementById(linkId);
        var popup = document.getElementById(popupId);
        var close = document.getElementById(closeId);

        function hide() {
            popup.classList.remove("active");
            document.body.style.overflow = "";
        }

        link.addEventListener("click", function(e) {
            e.preventDefault();
            popup.classList.add("active");
            document.body.style.overflow = "hidden";
        });
        close.addEventListener("click", hide);
        popup.addEventListener("click", function(e) {
            if (e.target === popup) hide();
        });
        document.addEventListener("keydown", function(e) {
            if (e.key === "Escape" && popup.classList.contains("active")) hide();
        });
    }

    setupLegalPopup("privacyPolicyLink", "privacyPopup", "privacyPopupClose");
    setupLegalPopup("termsOfServiceLink", "termsPopup", "termsPopupClose");
});
