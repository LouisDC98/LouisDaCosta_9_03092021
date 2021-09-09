/* Each function sanitize the datas */
class Format {
    static durationFormat(arg) {
        return arg.data.data.sessions;
    }
    static activityFormat(arg) {
        return arg.data.data.sessions;
    }

    static intensityFormat(arg) {
        return arg.data.data;
    }
}

export default Format;
