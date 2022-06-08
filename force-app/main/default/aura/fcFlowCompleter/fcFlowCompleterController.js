({
    doInit: function(component, event, helper) {
        let navigate = component.get('v.navigateFlow');
        helper.refreshRecord(component);
        navigate('FINISH');
    }
});
