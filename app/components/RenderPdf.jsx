'use client'

import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  const PDFDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Personalized Resume</Text>
        </View>
        <View style={styles.section}>
          <Text>Full Work Experience</Text>
        </View>
      </Page>
    </Document>
  );

export default function renderPdf(pdfData) {
    <div>
       <PDFDownloadLink
          document={<PDFDocument />}
          fileName="resume.pdf"
          className="download-button"
        >
          {({ loading }) =>
            loading ? 'Loading document...' : 'Download your Resume'
          }
        </PDFDownloadLink> 
    </div>
}