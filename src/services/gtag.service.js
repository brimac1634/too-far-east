class GtagService {
    static trackBookNow() {
        if (window.gtag) {
            window.gtag('event', 'conversion', {'send_to': 'AW-742880733/WMvSCOnf96EYEN3rneIC'});
        }
    }
}

export default GtagService;