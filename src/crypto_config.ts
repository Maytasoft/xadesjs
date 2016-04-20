namespace xadesjs {
    export class CryptoConfig {
        static CreateFromName(name: string): Transform {
            let t: Transform = null;
            switch (name) {
                case XmlSignature.AlgorithmNamespaces.XmlDsigBase64Transform:
                    throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, name);
                // t = new XmlDsigBase64Transform();
                // break;
                case XmlSignature.AlgorithmNamespaces.XmlDsigC14NTransform:
                    t = new XmlDsigC14NTransform();
                    break;
                case XmlSignature.AlgorithmNamespaces.XmlDsigC14NWithCommentsTransform:
                    t = new XmlDsigC14NWithCommentsTransform();
                    break;
                case XmlSignature.AlgorithmNamespaces.XmlDsigEnvelopedSignatureTransform:
                    t = new XmlDsigEnvelopedSignatureTransform();
                    break;
                case XmlSignature.AlgorithmNamespaces.XmlDsigXPathTransform:
                    throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, name);
                // t = new XmlDsigXPathTransform();
                // break;
                case XmlSignature.AlgorithmNamespaces.XmlDsigXsltTransform:
                    throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, name);
                // t = new XmlDsigXsltTransform();
                // break;
                case XmlSignature.AlgorithmNamespaces.XmlDsigExcC14NTransform:
                    t = new XmlDsigExcC14NTransform();
                    break;
                case XmlSignature.AlgorithmNamespaces.XmlDsigExcC14NWithCommentsTransform:
                    t = new XmlDsigExcC14NWithCommentsTransform();
                    break;
                case XmlSignature.AlgorithmNamespaces.XmlDecryptionTransform:
                    throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, name);
                // t = new XmlDecryptionTransform();
                // break;
                default:
                    throw new XmlError(XE.ALGORITHM_NOT_SUPPORTED, name);
            }
            return t;
        }
    }
}