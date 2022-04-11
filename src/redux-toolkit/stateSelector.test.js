import getCounterValue from "./stateSelector";

describe('getCounterValue', () => {

    const exampleState = { counter: { value: 100 } }

    test('work with empty state', () =>
        expect(getCounterValue({})).toBe(0)
    )

    test('work with filled state', () =>
        expect(getCounterValue(exampleState)).toBe(100)
    )

})