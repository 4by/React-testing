// чисто теоритически стейт может быть пустым (хотя такого быть не должно)
// то есть поле counter может не подгрузиться
// мы указываем с помощью знака вопроса, что
// value следует искать только при наличии counter
// (!counter) => (state == undefined) => (return 0).
export default state => state?.counter?.value || 0