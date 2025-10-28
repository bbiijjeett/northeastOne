import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Card } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8119827173",
      href: "tel:+918119827173"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 8119827173",
      href: "https://wa.me/918119827173"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@neone.com",
      href: "mailto:info@neone.com"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Paltan Bazar, Guwahati, Assam 781008",
      href: null
    }
  ];

  const faqs = [
    {
      question: "What does the ₹49 reservation fee cover?",
      answer: "The ₹49 fee reserves your spot on the tour. It's not the full payment but a small deposit that holds your booking. Our team will call you within 2-4 hours to confirm details, and you'll pay the remaining amount before the tour date. This fee is fully refundable if you cancel within 2 hours of booking."
    },
    {
      question: "How long do I have to pay the remaining amount?",
      answer: "You can pay the remaining amount anytime before the tour date, but we recommend paying at least 24 hours in advance. Our team will remind you and provide multiple payment options including bank transfer, UPI, or cash on the day of pickup."
    },
    {
      question: "What is your cancellation and refund policy?",
      answer: "The ₹49 reservation fee is fully refundable if cancelled within 2 hours of booking. After that, cancellation policies vary by tour - most tours offer free cancellation up to 24-48 hours before the tour date. The specific policy is mentioned on each tour page. Weather-related cancellations initiated by us result in full refunds."
    },
    {
      question: "How quickly will someone contact me after I reserve?",
      answer: "Our team typically calls within 2-4 hours during business hours (9 AM - 8 PM IST). If you book outside these hours, we'll contact you first thing the next morning. You can also reach us immediately via WhatsApp for urgent queries."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including: UPI (Google Pay, PhonePe, Paytm), Bank Transfer (NEFT/IMPS), Credit/Debit Cards, and Cash (at pickup). The ₹49 reservation fee can be paid online, and the remaining amount can be paid via any method you prefer."
    },
    {
      question: "Is it safe to book tours with TourMitra?",
      answer: "Yes! We've been operating since 2015 and have served over 10,000 travelers. All our tours include insurance coverage, safety equipment, and trained guides. We follow strict safety protocols and all vehicles are regularly maintained and sanitized."
    },
    {
      question: "What should I carry on the tour?",
      answer: "Each tour page lists specific requirements, but generally you should bring: valid ID proof, comfortable clothing and footwear, sunscreen, hat/cap, water bottle, camera, and any personal medications. For specific tours like water sports or treks, additional items may be needed and will be mentioned in the tour details."
    },
    {
      question: "Can I modify my booking after reservation?",
      answer: "Yes, you can modify your booking by contacting us via phone or WhatsApp. We'll try our best to accommodate date changes, guest count modifications, or pickup location changes based on availability. Some changes may incur additional charges."
    },
    {
      question: "What if I choose the WhatsApp option instead of ₹49?",
      answer: "If you choose 'Contact WhatsApp', you'll be connected to our WhatsApp business number where you can discuss the tour, ask questions, and make a booking. This option is great if you want to clarify details before committing to a reservation. Our team typically responds within 30 minutes during business hours."
    },
    {
      question: "Are pickup and drop-off included?",
      answer: "Most of our tours include pickup and drop-off from designated points within the city. Specific pickup locations and times are mentioned on each tour page. If you need pickup from a custom location, please mention it when our team calls you, and we'll try to arrange it (may incur additional charges)."
    },
    {
      question: "Do you collect personal or sensitive information?",
      answer: "We only collect basic information necessary for the tour booking (name, contact number, pickup location). We do not collect or store sensitive personal information like Aadhaar numbers or financial data. Your payment information is processed through secure payment gateways and is not stored by us."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950 text-white py-16 overflow-hidden relative">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1668437824006-1be44600774b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: "cover",
            backgroundPosition: 'center',
            opacity: 0.5, // adjust visibility
          }}
        ></div>

        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="mb-4 text-white font-extrabold text-4xl md:text-5xl">Contact Us</h1>
          <p className="text-lg md:text-xl mb-8 text-emerald-50 font-semibold max-w-2xl mx-auto">
            Have questions? We're here to help! Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-2">{info.label}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-blue-600 hover:underline break-words"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-600">{info.value}</p>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Quick Contact */}
          <Card className="p-8 mb-12 bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="mb-4">Need Immediate Assistance?</h2>
              <p className="text-gray-600 mb-6">
                Chat with us on WhatsApp for instant support during business hours (9 AM - 8 PM IST)
              </p>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open('https://wa.me/918119827173', '_blank')}
              >
                <MessageCircle className="mr-2" size={20} />
                Chat on WhatsApp
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about bookings, payments, and our services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span>{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <h3 className="mb-4">Important Information</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <p>
                  <strong>Business Hours:</strong> Monday to Sunday, 9:00 AM - 8:00 PM (IST)
                </p>
                <p>
                  <strong>Response Time:</strong> Phone calls and WhatsApp messages are typically answered within 30 minutes during business hours. Emails are responded to within 24 hours.
                </p>
                <p>
                  <strong>Privacy & Data:</strong> TourMitra is designed for tour bookings and basic contact information only. We do not collect or store sensitive personal information (PII) such as government IDs, financial information beyond payment processing, or any other sensitive data. Your privacy and security are important to us.
                </p>
                <p>
                  <strong>Emergency Contact:</strong> For urgent matters on the day of your tour, call our emergency helpline at +91 8119827173.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
