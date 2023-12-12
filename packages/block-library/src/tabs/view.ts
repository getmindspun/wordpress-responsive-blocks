(function () {

    window.addEventListener('DOMContentLoaded', function () {
        const blocks = document.querySelectorAll('.wp-block-mindspun-payments-tabs');

        blocks.forEach((block) => {
            const tabButtons = block.querySelectorAll('*[data-toggle="tab"]');
            tabButtons.forEach((button: Element) => {
                const currentTab = button.parentElement!;
                currentTab.addEventListener('click', function () {
                    const target = button.getAttribute('data-target');
                    if (target) {
                        const element = block.querySelector(target);
                        if (element) {
                            block.querySelectorAll('.wp-block-mindspun-payments-tab').forEach(panel => {
                                panel.classList.add('pay-tab--hidden');
                            });
                            for (let i = 0; i < tabButtons.length; i++) {
                                const tab = tabButtons[i].parentElement!;
                                if (tab === currentTab) {
                                    tab.classList.add('pay-tab--active');
                                    tab.setAttribute('aria-current', 'page');
                                } else {
                                    tab.classList.remove('pay-tab--active');
                                    tab.removeAttribute('aria-current');
                                }
                            }
                            element.classList.remove('pay-tab--hidden');
                            if (window.location.hash) {
                                window.location.hash = '';
                            }
                        }
                    }
                });

                if (window.location.hash) {
                    const buttonText = (button as HTMLButtonElement).textContent;
                    if (buttonText) {
                        const anchor = buttonText.trim().toLowerCase().replace(/\s+/g, '-');
                        if ('#' + anchor === window.location.hash) {
                            (button as HTMLButtonElement).click();
                        }
                    }
                }
            });
        });
    });
})();
