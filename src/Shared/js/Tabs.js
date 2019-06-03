const tabsClass = "ingredients-tabs";
const tabControlsClass = "ingredients-tabs__controls";
const buttonClass = "ingredients-tabs__button";
const activeButtonClass = "ingredients-tabs__button_is-active";
const tabClass = "ingredients-tabs__tab";
const activeTabClass = "ingredients-tabs__tab_is-active";

let tabs;

export default class Tabs {
    constructor() {
        tabs = document.querySelector("." + tabsClass);
    }

    init() {
        let tabControls = tabs.querySelector("." + tabControlsClass);
        let tabButtons = Array.from(tabControls.querySelectorAll("." + buttonClass));
        let tabTabs = Array.from(tabs.querySelectorAll("." + tabClass));
        let tabListener = function (e) {
            if (e.target.tagName === "BUTTON" && !e.target.classList.contains(activeButtonClass)) {
                tabs.querySelector("." + activeButtonClass).classList.remove(activeButtonClass);
                e.target.classList.add(activeButtonClass);
                let activeTab = tabs.querySelector("." + activeTabClass);
                activeTab.classList.remove(activeTabClass);
                let activeTabIndex = tabButtons.indexOf(e.target);
                activeTab = tabTabs[activeTabIndex];
                activeTab.classList.add(activeTabClass);

            }
        };

        tabControls.addEventListener("click", tabListener);

        tabs.querySelector(".ingredients-tabs__button").classList.add(activeButtonClass);
        tabs.querySelector(".ingredients-tabs__tab").classList.add(activeTabClass);
    }
}