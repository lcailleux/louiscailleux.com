import urllib.request
import sched
import time

s = sched.scheduler(time.time, time.sleep)


def refresh_site(sc):
    backend = urllib.request.urlopen("https://louiscailleux-backend.herokuapp.com").read()
    frontend = urllib.request.urlopen("https://louiscailleux.com").read()

    if backend.length and frontend.length:
        print("Ping successfull")

    s.enter(25, 1, refresh_site, (sc,))


s.enter(1, 1, refresh_site, (s,))
s.run()
