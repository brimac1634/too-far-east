class GtagService {
    static _trackConversion(eventId) {
        if (window.gtag) {
            window.gtag('event', 'conversion', {'send_to': `AW-742880733/${eventId}`});
        }
    }

    static trackBookNowEvent() {
        GtagService._trackConversion('WMvSCOnf96EYEN3rneIC');
    }

    static trackCentralContactEvent() {
        GtagService._trackConversion('p5OACOXJm6QYEN3rneIC');
    }

    static trackSheungWanContactEvent() {
        GtagService._trackConversion('6zebCKPtm6QYEN3rneIC');
    }
}

export default GtagService;