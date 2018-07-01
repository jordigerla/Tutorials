from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
driver = webdriver.Chrome('./chromedriver')


for i in range(5):
    driver.get("https://freshgadgets.nl/")
    assert "Freshgadgets.nl" in driver.title

    time.sleep(2)

    elem = driver.find_element_by_xpath('//*[@id="menu-item-29409"]')
    elem.click()

    time.sleep(2)

    elem1 = driver.find_element_by_xpath('//*[@id="menu-item-29406"]')
    elem1.click()

    time.sleep(2)

    elem2 = driver.find_element_by_xpath('//*[@id="menu-item-60719"]')
    elem2.click()

    time.sleep(2)

    bericht = driver.find_element_by_xpath('//*[@id="content"]/form/label/input')
    bericht.clear()
    bericht.send_keys('bitcoin')

    time.sleep(1)

    bericht.submit()

    time.sleep(2)

    print("iteration " + str(i))

driver.close()



