
// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let successful = []

let unSuccessful = []

let taxes = 0

let taxesMax = {}

let taxesMin = {}

// Реальные данные 2021*

let bank = [

    {

        name: 'Apple',

        budget: 1000000,

        tax: 28,

        expensesPerYear: [

            {
                title: 'Salaries',

                total: 125000
            },

            {
                title: 'Utilites',

                total: 18000,
            },

            {
                title: 'Rent',

                total: 258000
            }

        ]

    },

    {

        name: 'Microsoft',

        budget: 988000,

        tax: 21,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 148000

            },

            {

                title: 'Utilites',

                total: 124000,

            },

            {

                title: 'Rent',

                total: 314000

            }

        ]

    },

    {

        name: 'HP',

        budget: 609000,

        tax: 14,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 414000

            },

            {

                title: 'Utilites',

                total: 19000,

            },

            {

                title: 'Rent',

                total: 114400

            }

        ]

    },

    {

        name: 'Xiomi',

        budget: 889500,

        tax: 17,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 318000

            },

            {

                title: 'Utilites',

                total: 14000,

            },

            {

                title: 'Rent',

                total: 169000

            }

        ]

    },

    {

        name: 'Samsung',

        budget: 889500,

        tax: 12,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 650400

            },

            {

                title: 'Utilites',

                total: 29000,

            },

            {

                title: 'Rent',

                total: 212000

            }

        ]

    },

]

// 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах*

// 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ procent в объектах. Например компания в месяц зарабатывает 100,000, а тратит 25,000, значит ее ключ procent = 25%*

// 3. Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax*

// 4. Сохранить в переменной taxes общее количество налогов со всех компаний. Например все платят по 20,000 в месяц. В итоге taxes = 100,000*

// 5. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги*

// 6. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег в компании после вычета всех налогов и трат*

// * Писать весь код в функции setup()*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

let setup = (ok) => {
    let r = []
    let d = ok[0]

    let w = []

    for (let i of d.expensesPerYear) {

        w.push(i.total)

    }


    let q = w.reduce((a, b) => a + b)
    ok[0].expensesPerMonth = q
    let v = d.budget
    let vc = q/v*100
    ok[0].procent=vc
    let f = v/100*d.tax
    ok[0].taxMony = f
    ok[0].totalMoney=v-(q+f)
    



    let d1 = ok[1]

    let w1 = []

    for (let i of d1.expensesPerYear) {

        w1.push(i.total)

    }


    let q1 = w1.reduce((a, b) => a + b)
    ok[1].expensesPerMonth = q1
    let v1 = d1.budget
    let vc1 = q1/v1*100
    ok[1].procent=vc1
    let f1 = v1/100*d.tax
    ok[1].taxMony = f1
    ok[1].totalMoney=v-(q1+f1)


    let d2 = ok[2]

    let w2 = []

    for (let i of d2.expensesPerYear) {

        w2.push(i.total)

    }


    let q2 = w2.reduce((a, b) => a + b)
    ok[2].expensesPerMonth = q2
    let v2 = d2.budget
    let vc2 = q2/v2*100
    ok[2].procent=vc2
    let f2 = v2/100*d.tax
    ok[2].taxMony = f2
    ok[2].totalMoney=v-(q2+f2)


    let d3 = ok[3]

    let w3 = []

    for (let i of d3.expensesPerYear) {

        w3.push(i.total)

    }


    let q3 = w3.reduce((a, b) => a + b)
    ok[3].expensesPerMonth = q3
    let v3 = d3.budget
    let vc3 = q3/v3*100
    ok[3].procent=vc3
    let f3 = v3/100*d.tax
    ok[3].taxMony = f3
    ok[3].totalMoney=v-(q3+f3)



    let d4 = ok[4]

    let w4 = []

    for (let i of d4.expensesPerYear) {

        w4.push(i.total)

    }


    let q4 = w4.reduce((a, b) => a + b)
    ok[4].expensesPerMonth = q4
    let v4 = d4.budget
    let vc4 = q4/v4*100
    ok[4].procent=vc4
    let f4 = v4/100*d.tax
    ok[4].taxMony = f4
    ok[4].totalMoney=v-(q4+f4)


    for (let i of ok) {
        for (let it of i.expensesPerYear) {
            let t = it.total
            r.push(t)
        }
    }
    let y = r.reduce((a, b) => a + b)
    taxes = y




    let max = Math.max(f,f1,f2,f3,f4)
    let min = Math.min(f,f1,f2,f3,f4)

    taxesMax = ok.filter(item=>item.taxMony==max)
    taxesMin = ok.filter(item=>item.taxMony==min)

    successful =ok.filter(item=>item.totalMoney>=0)
    unSuccessful=ok.filter(item=>item.totalMoney<=0)
}

setup(bank)
console.log(bank);
console.log(successful);
console.log(unSuccessful);
console.log(taxes);
console.log(taxesMax);
console.log(taxesMin);