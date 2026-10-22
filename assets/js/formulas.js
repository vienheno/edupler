export const formulas = {
  //Formulas
  cuadratica: `
    <math display="block">
      <mi>x</mi><mo>=</mo>
      <mfrac>
        <mrow><mo>−</mo><mi>b</mi><mo>±</mo><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi></mrow></msqrt></mrow>
        <mrow><mn>2</mn><mi>a</mi></mrow>
      </mfrac>
    </math>
  `,

  pitagoras: `
    <math display="block">
      <msup><mi>c</mi><mn>2</mn></msup><mo>=</mo>
      <msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup>
    </math>
  `,

  ley_exp_01: `
    <math display="block">
      <mrow>
        <msup>
          <mi>x</mi>
          <mi>a</mi>
        </msup>
        <mo>·</mo>
        <msup>
          <mi>x</mi>
          <mi>b</mi>
        </msup>
        <mo>=</mo>
        <msup>
          <mi>x</mi>
          <mrow>
            <mi>a</mi>
            <mo>+</mo>
            <mi>b</mi>
          </mrow>
        </msup>
      </mrow>
    </math>
  `,

  ley_exp_02: `
    <math display="block">
      <mrow>
        <msup>
          <mrow>
            <mo>(</mo>
            <mi>x</mi>
            <mo>·</mo>
            <mi>y</mi>
            <mo>)</mo>
          </mrow>
          <mi>a</mi>
        </msup>
        <mo>=</mo>
        <msup>
          <mi>x</mi>
          <mi>a</mi>
        </msup>
        <mo>·</mo>
        <msup>
          <mi>y</mi>
          <mi>b</mi>
        </msup>
      </mrow>
    </math>
  `,

  ley_exp_03: `
    <math display="block">
      <mrow>
        <mfrac>
          <msup>
            <mi>x</mi>
            <mi>a</mi>
          </msup>
          <msup>
            <mi>x</mi>
            <mi>b</mi>
          </msup>
        </mfrac>
        <mo>=</mo>
        <msup>
          <mi>x</mi>
          <mrow>
            <mi>a</mi>
            <mo>−</mo>
            <mi>b</mi>
          </mrow>
        </msup>
      </mrow>
    </math>
  `,

  ley_exp_04: `
    <math display="block">
      <mrow>
        <msup>
          <mi>x</mi>
          <mrow>
            <mo>−</mo>
            <mi>a</mi>
          </mrow>
        </msup>
        <mo>=</mo>
        <mfrac>
          <mn>1</mn>
          <msup>
            <mi>x</mi>
            <mi>a</mi>
          </msup>
        </mfrac>
      </mrow>
    </math>
  `,

  ley_exp_05: `
    <math display="block">
      <mrow>
        <msup>
          <mrow>
            <mo>(</mo>
            <msup>
              <mi>x</mi>
              <mi>a</mi>
            </msup>
            <mo>)</mo>
          </mrow>
          <mi>b</mi>
        </msup>
        <mo>=</mo>
        <msup>
          <mi>x</mi>
          <mrow>
            <mi>a</mi>
            <mo>·</mo>
            <mi>b</mi>
          </mrow>
        </msup>
      </mrow>
    </math>
  `,

  ley_exp_06: `
    <math display="block">
      <mrow>
        <msup>
          <mrow>
            <mo>(</mo>
            <mfrac>
              <mi>x</mi>
              <mi>y</mi>
            </mfrac>
            <mo>)</mo>
          </mrow>
          <mrow>
            <mo>−</mo>
            <mi>a</mi>
          </mrow>
        </msup>
        <mo>=</mo>
        <msup>
          <mrow>
            <mo>(</mo>
            <mfrac>
              <mi>y</mi>
              <mi>x</mi>
            </mfrac>
            <mo>)</mo>
          </mrow>
          <mi>a</mi>
        </msup>
      </mrow>
    </math>
  `,

  ley_rad_01: `
    <math display="block">
      <mrow>
        <mroot>
          <msup>
            <mi>x</mi>
            <mi>a</mi>
          </msup>
          <mi>b</mi>
        </mroot>
        <mo>=</mo>
        <msup>
          <mi>x</mi>
          <mfrac>
            <mi>a</mi>
            <mi>b</mi>
          </mfrac>
        </msup>
      </mrow>
    </math>
  `,

  ley_rad_02: `
    <math display="block">
      <mrow>
        <mroot>
          <mroot>
            <mi>x</mi>
            <mi>a</mi>
          </mroot>
          <mi>b</mi>
        </mroot>
        <mo>=</mo>
        <mroot>
          <mi>x</mi>
          <mrow>
            <mi>a</mi>
            <mo>·</mo>
            <mi>b</mi>
          </mrow>
        </mroot>
      </mrow>
    </math>
  `,

  ley_rad_03: `
    <math display="block">
      <mrow>
        <mroot>
          <mrow>
            <mi>x</mi>
            <mo>·</mo>
            <mi>y</mi>
          </mrow>
          <mi>b</mi>
        </mroot>
        <mo>=</mo>
        <mroot>
          <mi>x</mi>
          <mi>b</mi>
        </mroot>
        <mo>·</mo>
        <mroot>
          <mi>y</mi>
          <mi>b</mi>
        </mroot>
      </mrow>
    </math>
  `,

  ley_rad_04: `
    <math display="block">
      <mrow>
        <msup>
          <mrow>
            <mo>(</mo>
            <mroot>
              <mi>x</mi>
              <mi>a</mi>
            </mroot>
            <mo>)</mo>
          </mrow>
          <mi>b</mi>
        </msup>
        <mo>=</mo>
        <mroot>
          <msup>
            <mi>x</mi>
            <mi>b</mi>
          </msup>
          <mi>a</mi>
        </mroot>
      </mrow>
    </math>
  `,

  ley_rad_05: `
    <math display="block">
      <mrow>
        <mroot>
          <mfrac>
            <mi>x</mi>
            <mi>y</mi>
          </mfrac>
          <mi>b</mi>
        </mroot>
        <mo>=</mo>
        <mfrac>
          <mroot>
            <mi>x</mi>
            <mi>b</mi>
          </mroot>
          <mroot>
            <mi>y</mi>
            <mi>b</mi>
          </mroot>
        </mfrac>
      </mrow>
    </math>
  `,

  ley_rad_06: `
    <math display="block">
      <mrow>
        <mroot>
          <mi>x</mi>
          <mrow>
            <mo>−</mo>
            <mi>b</mi>
          </mrow>
        </mroot>
        <mo>=</mo>
        <mfrac>
          <mn>1</mn>
          <mroot>
            <mi>x</mi>
            <mi>b</mi>
          </mroot>
        </mfrac>
      </mrow>
    </math>
  `,

  //Pregunta Leyes de exponentes - Básico
  p01_LeyExpBas: `
    <math display="block">
      <mrow>
        <msup>
          <mrow>
            <mo>(</mo>
            <msup>
              <mi>x</mi>
              <mn>2</mn>
            </msup>
            <mo>)</mo>
          </mrow>
          <mn>3</mn>
        </msup>
        <mo>·</mo>
        <mroot>
          <msup>
            <mi>x</mi>
            <mn>12</mn>
          </msup>
          <mn>4</mn>
        </mroot>
      </mrow>
    </math>
    </br>
    <math display="block">
      <mrow>
        <mi>a</mi>
        <mo>)</mo>
        <mspace width="8px"/>
        <msup>
          <mi>x</mi>
          <mn>7</mn>
        </msup>

        <mspace width="30px"/>

        <mi>b</mi>
        <mo>)</mo>
        <mspace width="8px"/>
        <msup>
          <mi>x</mi>
          <mn>8</mn>
        </msup>

        <mspace width="30px"/>

        <mi>c</mi>
        <mo>)</mo>
        <mspace width="8px"/>
        <msup>
          <mi>x</mi>
          <mn>9</mn>
        </msup>

        <mspace width="30px"/>

        <mi>d</mi>
        <mo>)</mo>
        <mspace width="8px"/>
        <msup>
          <mi>x</mi>
          <mn>10</mn>
        </msup>
      </mrow>
    </math>
  `,
};