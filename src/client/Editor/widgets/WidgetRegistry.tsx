// WidgetRegistry.ts
import ContactForm from './ContactForm';
import Countdown from './Countdown';

const WidgetRegistry: { [key: string]: React.FC<any> } = {
  countdown: Countdown,
  contactForm: ContactForm,
};

export default WidgetRegistry;
