import React from 'react';
import { t } from 'i18next';

import styled from "styled-components";

const Main: React.FC = () => {
    return (
        <div>
            <p>
                {t<string>('페이지를 찾을 수 없어요.')}
            </p>
        </div>
    );
}

export default Main;