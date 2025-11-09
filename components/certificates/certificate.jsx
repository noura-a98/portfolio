import React from "react";
import CertificateItem from "./certificate-item";

const Certificates = (props) => {
    const certificates = props.data || [];

    return (
        <div data-section id='certificates' className='mb-16'>
            <h2 className='mb-8 visible lg:invisible font-medium tracking-widest'>Certificates</h2>
            {certificates.length > 0 ? (
                certificates.map((object, index) => (
                    <CertificateItem
                        key={`${object.subject}+${index}`}
                        subject={object.subject}
                        issuer={object.issuer}
                        href={object.href}
                        date={object.date}
                        description={object.description}
                    />
                ))
            ) : (
                <p className="text-surface-600">No certificates to display.</p>
            )}
        </div>
    );
};

export default Certificates;
