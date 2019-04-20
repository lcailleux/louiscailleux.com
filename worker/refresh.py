import urllib.request
import sched
import time

s = sched.scheduler(time.time, time.sleep)


def refresh_backend(sc):
    backend_request = urllib.request.Request("https://louiscailleux-backend.herokuapp.com",
                                             headers={'User-Agent': "Python"})
    backend = urllib.request.urlopen(backend_request)

    #if backend.getcode():
        #print("Backend ping successfull")

    s.enter(90, 1, refresh_backend, (sc,))


def refresh_frontend(sc):
    frontend_request = urllib.request.Request("https://www.louiscailleux.com", headers={'User-Agent': "Python"})
    frontend = urllib.request.urlopen(frontend_request)

    # if frontend.getcode():
    # print("Frontend ping successfull")

    s.enter(25, 1, refresh_frontend, (sc,))


s.enter(25, 1, refresh_frontend, (s,))
s.enter(90, 1, refresh_backend, (s,))
s.run()
