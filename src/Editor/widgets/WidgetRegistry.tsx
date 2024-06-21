// WidgetRegistry.ts
import Countdown from './Countdown';
import ContactForm from './ContactForm';

const WidgetRegistry: { [key: string]: React.FC<any> } = {
  countdown: Countdown,
  contactForm: ContactForm,
};

export default WidgetRegistry;
