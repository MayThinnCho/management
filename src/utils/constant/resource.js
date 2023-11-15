import { IMAGE_URL } from "./constant";

export const ImageResource = {
    home: {
        qrcode: require("../../../assets/image/qr-code.png"),
        report: require("../../../assets/image/report.png"),
        student: require("../../../assets/image/student.png"),
        timetable: require("../../../assets/image/schedule.png"),
        attendance: require("../../../assets/image/attendance.png"),
        updatePW: require("../../../assets/image/resetPW.png"),
        course: require("../../../assets/image/online-course.png"),
        payment: require("../../../assets/image/invoice.png"),
        outcome: require("../../../assets/image/outcome.png"),
        income_outcome: require("../../../assets/image/income-outcome.png"),
        income_web: require("../../../assets/image/income.png"),
        outcome_web: require("../../../assets/image/expense.png"),
        ferry: require("../../../assets/image/ferry.png"),
    },
    icon: {
        home: require("../../../assets/icon/home.png"),
        student_logo: require("../../../assets/icon/student_logo.png"),
        cross: require("../../../assets/icon/cross.png"),
        check_mark: require("../../../assets/icon/check-mark.png"),
        enter_arrow: require("../../../assets/icon/enter-arrow.png"),
        arrow_right: require("../../../assets/icon/arrow-right.png"),
        user_logo:  require("../../../assets/image/header_profile.png"),
        male:require("../../../assets/image/man.png"),
        admin:require("../../../assets/image/woman.png"),
        female:require("../../../assets/image/woman.png"),
        parent:require("../../../assets/image/parent.jpg"),
    },
    logo: {
        bib_logo: require("../../../assets/bib_logo.png"),
        gm_logo: require("../../../assets/gm_logo.png")
    },
    error: {
        notFound: require("../../../assets/image/404.jpg"),
        noInternet: require("../../../assets/image/noInternet.png"),
    },
    genStudentImgUrl: (id, fileName) => {
        return `${IMAGE_URL}student/${id}/${fileName}`;
    }
}
