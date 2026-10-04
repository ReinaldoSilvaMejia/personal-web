import type { Bilingual } from "@/lib/i18n";

export const PRIVACY_CONTACT_EMAIL = "reinaldosilvamejia@gmail.com";

export const privacyUpdated: Bilingual = {
  es: "Última actualización: 4 de octubre de 2026",
  en: "Last updated: October 4, 2026",
};

export const privacyIntro = {
  eyebrow: { es: "Legal", en: "Legal" } satisfies Bilingual,
  title: {
    es: "Política de privacidad",
    en: "Privacy policy",
  } satisfies Bilingual,
  lead: {
    es: "Esta política explica cómo se tratan tus datos cuando escribes por WhatsApp al asistente automatizado de Reinaldo Silva Mejía, que utilizan sus clientes para enviar peticiones de trabajo.",
    en: "This policy explains how your data is handled when you message, on WhatsApp, the automated assistant run by Reinaldo Silva Mejía, which his clients use to send work requests.",
  } satisfies Bilingual,
};

export type PrivacySection = {
  /** Anchor id, so a section can be linked directly (e.g. from Meta). */
  id: string;
  title: Bilingual;
  /** Paragraphs. */
  body?: Bilingual<string[]>;
  /** Bullet list shown after the paragraphs. */
  list?: Bilingual<string[]>;
  /** Paragraphs shown after the list. */
  after?: Bilingual<string[]>;
};

export const privacySections: PrivacySection[] = [
  {
    id: "responsable",
    title: { es: "1. Responsable del tratamiento", en: "1. Data controller" },
    body: {
      es: [
        "El responsable del tratamiento es Reinaldo Silva Mejía (persona física, a título individual). Para cualquier cuestión sobre esta política o sobre tus datos puedes escribir a {email}.",
      ],
      en: [
        "The data controller is Reinaldo Silva Mejía (an individual, acting in a personal capacity). For any question about this policy or your data you can write to {email}.",
      ],
    },
  },
  {
    id: "datos",
    title: { es: "2. Qué datos se tratan", en: "2. What data is processed" },
    body: {
      es: ["Cuando escribes al asistente por WhatsApp se tratan:"],
      en: ["When you message the assistant on WhatsApp, the following is processed:"],
    },
    list: {
      es: [
        "Tu número de teléfono y tu nombre de pila (el asistente solo atiende a números previamente autorizados por el responsable).",
        "El contenido de los mensajes que envías y las respuestas del asistente.",
        "Identificadores técnicos del mensaje (por ejemplo, el identificador que asigna WhatsApp) y registros técnicos del servidor.",
      ],
      en: [
        "Your phone number and first name (the assistant only answers numbers previously authorized by the controller).",
        "The content of the messages you send and the assistant's replies.",
        "Technical message identifiers (for example, the one assigned by WhatsApp) and technical server logs.",
      ],
    },
    after: {
      es: ["No se solicitan ni se pretenden tratar categorías especiales de datos. Te pedimos que no las incluyas en tus mensajes."],
      en: ["Special categories of data are neither requested nor intended to be processed. Please do not include them in your messages."],
    },
  },
  {
    id: "finalidad",
    title: {
      es: "3. Para qué se usan y base legal",
      en: "3. Purposes and legal basis",
    },
    body: {
      es: [
        "Los datos se usan únicamente para atender tu petición: mantener la conversación contigo, convertir lo que pides en tareas de trabajo y avisar al responsable de esas tareas. No se usan para publicidad, ni para elaborar perfiles, ni se venden.",
        "La base legal es la ejecución de la relación de servicio que ya mantienes con el responsable y su interés legítimo en gestionar tus peticiones de forma eficiente (art. 6.1.b y 6.1.f del RGPD).",
      ],
      en: [
        "The data is used solely to handle your request: to hold the conversation with you, turn what you ask into work tasks and notify the controller of those tasks. It is not used for advertising or profiling, and it is never sold.",
        "The legal basis is the performance of the service relationship you already have with the controller and his legitimate interest in handling your requests efficiently (Art. 6.1.b and 6.1.f GDPR).",
      ],
    },
  },
  {
    id: "terceros",
    title: {
      es: "4. Con quién se comparten",
      en: "4. Who receives the data",
    },
    body: {
      es: ["Para prestar el servicio intervienen estos proveedores, que actúan como encargados del tratamiento:"],
      en: ["These providers take part in delivering the service and act as processors:"],
    },
    list: {
      es: [
        "Meta Platforms (WhatsApp Business Platform): transporta los mensajes entre tú y el asistente.",
        "Anthropic: procesa el texto de la conversación con un modelo de inteligencia artificial para redactar las respuestas y extraer las tareas.",
        "Slack: recibe el resumen de tareas de cada conversación en el canal privado del cliente correspondiente.",
        "Amazon Web Services: aloja el servidor que ejecuta el asistente.",
      ],
      en: [
        "Meta Platforms (WhatsApp Business Platform): carries the messages between you and the assistant.",
        "Anthropic: processes the conversation text with an artificial intelligence model to write replies and extract tasks.",
        "Slack: receives the task summary of each conversation in the relevant client's private channel.",
        "Amazon Web Services: hosts the server that runs the assistant.",
      ],
    },
    after: {
      es: ["Algunos de estos proveedores están en países fuera del Espacio Económico Europeo, en cuyo caso la transferencia se ampara en las garantías que ofrecen (como las cláusulas contractuales tipo de la Comisión Europea)."],
      en: ["Some of these providers are located outside the European Economic Area, in which case the transfer relies on the safeguards they provide (such as the European Commission's standard contractual clauses)."],
    },
  },
  {
    id: "conservacion",
    title: { es: "5. Cuánto tiempo se conservan", en: "5. Retention" },
    list: {
      es: [
        "Conversación: el asistente mantiene el historial solo en la memoria del servidor. Se descarta cuando la conversación termina o tras 15 minutos de inactividad, y también si el servidor se reinicia.",
        "Resumen de tareas: se conserva en el canal de Slack del cliente mientras sea necesario para gestionar el trabajo solicitado, y después se elimina.",
        "Registros técnicos del servidor: contienen datos como tu número de teléfono e identificadores de mensaje, pero no el texto de tus mensajes, y se conservan durante un periodo limitado.",
        "Los proveedores del apartado 4 pueden conservar datos según sus propias políticas.",
      ],
      en: [
        "Conversation: the assistant keeps the history in the server's memory only. It is discarded when the conversation ends or after 15 minutes of inactivity, and also if the server restarts.",
        "Task summary: kept in the client's Slack channel for as long as it is needed to manage the requested work, and then deleted.",
        "Technical server logs: they contain data such as your phone number and message identifiers, but not the text of your messages, and are kept for a limited period.",
        "The providers in section 4 may retain data under their own policies.",
      ],
    },
  },
  {
    id: "derechos",
    title: { es: "6. Tus derechos", en: "6. Your rights" },
    body: {
      es: [
        "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a {email}. Responderé en el plazo legal de un mes.",
        "Si consideras que tus datos no se tratan correctamente, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) o ante la autoridad de control de tu país.",
      ],
      en: [
        "You can exercise your rights of access, rectification, erasure, objection, restriction of processing and portability by writing to {email}. I will reply within the legal period of one month.",
        "If you believe your data is not being handled properly, you have the right to lodge a complaint with the Spanish Data Protection Agency (www.aepd.es) or with the supervisory authority of your country.",
      ],
    },
  },
  {
    id: "eliminacion-de-datos",
    title: {
      es: "7. Eliminación de datos",
      en: "7. Data deletion",
    },
    body: {
      es: [
        "Para pedir que se eliminen tus datos, envía un correo a {email} desde cualquier dirección indicando el número de teléfono con el que escribes por WhatsApp y el asunto «Eliminación de datos».",
        "Se borrarán los resúmenes y cualquier otro dato asociado a ese número que estén bajo el control del responsable, y se te confirmará por correo, como máximo en un mes. Ten en cuenta que los mensajes que ya existen en tu propio WhatsApp los gestionas tú desde tu aplicación.",
      ],
      en: [
        "To request that your data be deleted, send an email to {email} from any address stating the phone number you use on WhatsApp and the subject “Data deletion”.",
        "The summaries and any other data linked to that number under the controller's control will be deleted, and you will be notified by email within one month at most. Please note that messages that already exist in your own WhatsApp are managed by you from your app.",
      ],
    },
  },
  {
    id: "seguridad",
    title: { es: "8. Seguridad", en: "8. Security" },
    body: {
      es: [
        "Las comunicaciones del servidor van cifradas (HTTPS), las claves y credenciales se guardan fuera del código en un almacén de secretos, se verifica la firma de cada mensaje recibido de Meta y el asistente ignora cualquier número que no esté autorizado.",
      ],
      en: [
        "Server communications are encrypted (HTTPS), keys and credentials are stored outside the code in a secrets store, the signature of every message received from Meta is verified, and the assistant ignores any number that is not authorized.",
      ],
    },
  },
  {
    id: "cambios",
    title: { es: "9. Cambios en esta política", en: "9. Changes to this policy" },
    body: {
      es: [
        "Si esta política cambia, se publicará aquí la nueva versión con su fecha de actualización.",
      ],
      en: [
        "If this policy changes, the new version will be published here with its update date.",
      ],
    },
  },
];
