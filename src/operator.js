import { range, interval, fromEvent } from "rxjs";
import { tap, filter, map } from "rxjs/operators"

const observable$ = range(1, 10)

const observer = {
    next: x => console.log(x + ' 발행'),
    error: err => console.error('발행중 오류', err),
    complete: () => console.log('발행물 완결'),
}

observable$.pipe(
    filter(x => x % 2 === 0),
    map(x => x * x),
    map(x => x * 10)
).subscribe(observer)


const observable2$ = interval(1000)

// ... observer 정의

observable2$.pipe(
    tap(console.log),
    filter(x => x % 2 === 0),
    map(x => x * x)
).subscribe(observer)


const observable3$ = fromEvent(document, 'click')

// ... observer 정의

observable3$.pipe(
    map(e => e.x + ' ' + e.y),
).subscribe(observer)