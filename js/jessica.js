const print = (object) => {
    document.getElementById('stateOfJessica').textContent = JSON.stringify(object);
};

let chapter = -1;
let jessica = { age: 5, interests: ['Learning', 'Reading'] };

let advance = () => {

    ++chapter;
    switch (chapter) {
        case 0:
            print(jessica);
            break;
        case 1:
            jessica.age += 3;
            jessica.interests.push('Math');
            print(jessica);
            break;
        case 2:
            jessica.age += 4;
            jessica.interests.push('Problem Solving');
            print(jessica);
            break;
        case 3:
            jessica.age += 1;
            jessica.interests.push('Cryptography');
            print(jessica);
            break;
        case 4:
            jessica.age += 4;
            jessica.interests.push('Computer Programming');
            print(jessica);
            break;

        case 5:
            jessica.age += 1;
            jessica.majors = ['Math', 'Computer Science'];
            print(jessica);
            break;

        case 6:
            jessica.age += 2;
            jessica.favoriteMajor = 'Computer Science';
            print(jessica);
            break;

        case 7:
            jessica.age += 3;
            jessica.graduated = true;
            jessica.codingPreference = 'Clever Code';
            print(jessica);
            break;
    }

};

let toToday = () => {
    jessica.age = 31;
    jessica.codingAttempt = 'Clear Code';
    print(jessica);
};

const el = document.getElementById('next');
el.addEventListener('click', advance);