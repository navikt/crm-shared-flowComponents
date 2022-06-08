({
    refreshRecord: function(component) {
        const refresh = component.get('v.refreshRecord');

        if (refresh === true) {
            //fire refresh event
            $A.get('e.force:refreshView').fire();
        }
    }
});
