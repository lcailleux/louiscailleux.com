import urllib.request
import sched
import time

s = sched.scheduler(time.time, time.sleep)


def refresh_site(sc):
    backend_request = urllib.request.Request("https://louiscailleux-backend.herokuapp.com",
                                             headers={'User-Agent': "Python"})
    backend = urllib.request.urlopen(backend_request)

    frontend_request = urllib.request.Request("https://www.louiscailleux.com", headers={'User-Agent': "Python"})
    frontend = urllib.request.urlopen(frontend_request)

    #if backend.getcode() and frontend.getcode():
        #print("Ping successfull")

    s.enter(25, 1, refresh_site, (sc,))


s.enter(25, 1, refresh_site, (s,))
s.run()
