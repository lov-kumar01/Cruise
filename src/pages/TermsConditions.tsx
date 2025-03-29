
import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import AppLayout from '@/components/layout/AppLayout';

const TermsConditions = () => {
  return (
    <AppLayout userRole="voyager">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="mx-auto bg-cruise-50 w-16 h-16 rounded-full flex items-center justify-center text-cruise-600 mb-4">
            <FileText size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-3">Terms & Conditions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our services.
          </p>
        </header>

        <GlassCard className="p-8 mb-8">
          <div className="flex items-center mb-4">
            <CheckCircle className="text-cruise-600 mr-3" />
            <h2 className="text-2xl font-bold">Agreement to Terms</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
          </p>
          <p className="text-gray-600 mb-4">
            By accessing or using OceanVoyage, you agree to be bound by these Terms and Conditions. 
            If you disagree with any part of the terms, you may not access the service.
          </p>
        </GlassCard>

        <div className="space-y-8 mb-12">
          <GlassCard className="p-8">
            <h3 className="text-xl font-semibold mb-4">Use of the Service</h3>
            <p className="text-gray-600 mb-4">
              OceanVoyage provides a platform for users to search, compare, and book cruises. By using our service, you agree:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>To provide accurate and complete information when creating an account</li>
              <li>To maintain the security of your account and password</li>
              <li>Not to use the service for any illegal or unauthorized purpose</li>
              <li>Not to attempt to access, use, or tamper with other users' accounts</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-xl font-semibold mb-4">Booking and Payments</h3>
            <p className="text-gray-600 mb-4">
              When booking through our platform:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>All bookings are subject to availability and confirmation</li>
              <li>Prices are subject to change without notice until payment is completed</li>
              <li>Payment methods accepted include major credit cards and digital payment services</li>
              <li>Booking confirmation will be sent to the email address provided during checkout</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-xl font-semibold mb-4">Cancellations and Refunds</h3>
            <p className="text-gray-600 mb-4">
              Cancellation policies vary by cruise line and fare type. Generally:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Cancellations made 90+ days before sailing may receive a full refund</li>
              <li>Cancellations made 60-89 days before sailing may incur a 25% penalty</li>
              <li>Cancellations made 30-59 days before sailing may incur a 50% penalty</li>
              <li>Cancellations made less than 30 days before sailing are typically non-refundable</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-xl font-semibold mb-4">Limitation of Liability</h3>
            <p className="text-gray-600 mb-4">
              OceanVoyage serves as an intermediary between users and cruise providers. We:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Are not responsible for the services provided by cruise lines</li>
              <li>Do not guarantee the accuracy of all information provided by cruise lines</li>
              <li>Are not liable for any injury, loss, or damage resulting from cruise travel</li>
              <li>Recommend that all travelers purchase appropriate travel insurance</li>
            </ul>
          </GlassCard>
        </div>

        <GlassCard className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <p className="text-cruise-600 font-medium">legal@oceanvoyage.com</p>
        </GlassCard>
      </div>
    </AppLayout>
  );
};

export default TermsConditions;
