// observer (구독자)에게 발행물 구독시키기
const rxjs = require("rxjs");
const { from } = rxjs
const observable$ = from([1, 2, 3, 4, 5])

const observer = {
    next: console.log,
    error: err => console.error('발행중 오류', err),
    complete: () => console.log('발행물 완결'),
}

observable$.subscribe(observer)

const observer_1 = {
    next: console.log,
    error: err => console.error('발행중 오류', err),
}

const observer_2 = {
    next: console.log
}

observable$.subscribe(
    console.log,
    err => console.error('발행중 오류', err),
    _ => console.log('발행물 완결')
)

const { Observable } = rxjs

const obs$ = new Observable(subscriber => {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
    subscriber.complete()
    subscriber.next(4)
})

obs$.subscribe(
    console.log,
    err => console.error('발행중 오류', err),
    _ => console.log('발행물 완결')
)

const { interval } = rxjs

const obs1$ = interval(1000)
const subscription = obs1$.subscribe(console.log)

setTimeout(_ => subscription.unsubscribe(), 5500)