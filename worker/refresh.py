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

    s.enter(25, 1, refresh_backend, (sc,))


s.enter(25, 1, refresh_backend, (s,))
s.run()
