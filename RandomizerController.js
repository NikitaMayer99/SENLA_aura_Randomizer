({
    checkField: function(component, event, helper) {
        let firstField = component.find('firstNumber').get('v.value');
        let secondField = component.find('secondNumber').get('v.value');
        if (firstField != null && secondField != null) {
            component.set('v.buttonIsActive', false)
        }
        
    },
    
    handleCalculate: function(component, event, helper) {
        
        let firstField = component.find('firstNumber').get('v.value');
        let secondField = component.find('secondNumber').get('v.value');
          
        if (firstField >= secondField) {
            let toastEvent = $A.get("e.force:showToast");
    		toastEvent.setParams({
        		title: "Error! Randomizer",
        		message: "The first number must be less than the second!",
                type: "error",
                duration:"10000",
                mode: "dismissible"
    		});
            toastEvent.fire();
        } else {
            let result = Math.floor(Math.random() * (secondField - firstField + 1)) + firstField;
            component.set("v.result", result);
        }
    }
})
