from playwright.sync_api import sync_playwright
import time

def verify(page):
    print("Navigating to Home...")
    page.goto("http://localhost:5173/")
    # Wait for React to mount
    page.wait_for_selector('nav', timeout=10000)
    print("Taking Home screenshot...")
    page.screenshot(path="home_page.png", full_page=True)

    print("Navigating to Pricing...")
    page.goto("http://localhost:5173/pricing")
    page.wait_for_selector('h1', timeout=10000)
    print("Taking Pricing screenshot...")
    page.screenshot(path="pricing_page.png", full_page=True)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
