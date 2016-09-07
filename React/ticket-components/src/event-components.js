import Text from './text-input/text';
import Select from './select-input/select';
import Radio from './radio-input/radio';
import EventMixin from './util/events';

let TextEvent = EventMixin(Text);
let SelectEvent = EventMixin(Select);
let RadioEvent = EventMixin(Radio);

export {
	TextEvent,
	SelectEvent
}