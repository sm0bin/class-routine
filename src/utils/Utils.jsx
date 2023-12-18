import moment from "moment/moment";

// const stateColor = (state) => {
//     if (state === 'active') {
//         return 'bg-green-50';
//     } else if (state === 'pending') {
//         return 'bg-yellow-100';
//     } else if (state === 'canceled') {
//         return 'bg-red-100';
//     } else if (state === 'break') {
//         return 'bg-orange-100';
//     }
// }

const classBackgroundColor = (item) => {
    switch (item.state) {
        case 'active':
            switch (item.day) {
                case moment().format("ddd"):
                    return 'bg-yellow-50';
                case moment().add(1, 'day').format("ddd"):
                    return 'bg-green-100';
                default:
                    return 'bg-green-50';
            }
        case 'pending':
            return 'bg-yellow-100';
        case 'canceled':
            return 'bg-red-100';
        case 'break':
            return 'bg-orange-100';
        default:
            return 'bg-gray-100';
    }
}

const dayBatchBackgroundColor = (day) => {
    switch (day) {
        case moment().format("ddd"):
            return 'bg-yellow-50';
        case moment().add(1, 'day').format("ddd"):
            return 'bg-green-100';
        default:
            return 'bg-indigo-50';
    }
}

// const dayColor = (day) => {
//     // if (state === 'active') {
//     //     return 'bg-green-50';
//     // } else if (state === 'pending') {
//     //     return 'bg-yellow-100';
//     // } else if (state === 'canceled') {
//     //     return 'bg-red-100';
//     // } else if (state === 'break') {
//     //     return 'bg-orange-100';
//     // } else
//     if (day === moment().format("ddd")) {
//         return 'bg-yellow-50';
//     } else if (day === moment().add(1, 'day').format("ddd")) {
//         return 'bg-green-100';
//     } else {
//         return 'bg-gray-100';
//     }
// }

// export { stateColor, dayColor, classBackgroundColor };
export { classBackgroundColor, dayBatchBackgroundColor };