// Check answer type, time window

@Component()
    export class MyDataViewWidget extends WidgetComponent<DataViewControl> {
        
        static match(dataViewControl: DataViewControl){

            // This widget can deal with just one Dataset:
            if(dataViewControl.data.length == 1) return 1

            // If there is no data set or more than two, this widget cannot do the trick:
            if(dataViewControl.data.length != 2) return -1

            // If the second Dataset is tagged with #my-physical-state-overall, this widget is a perfect match!
            if(dataViewControl.data[1].question.tags.includes('#scale')) return 2

            // In any other case; i.e. the tag is missing, this widget has no clue what to do:
            return -1

        }
    }