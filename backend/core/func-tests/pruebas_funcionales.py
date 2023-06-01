from selenium import webdriver
import time
from selenium.webdriver.common.by import By


web = webdriver.Chrome()
web.get('http://localhost:5173/')

time.sleep(2)