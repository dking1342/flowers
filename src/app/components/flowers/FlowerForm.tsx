'use client';
import React, { useState, useEffect, useCallback } from 'react';
import {
  availabilityChoices,
  deliveryMethodChoices,
  initialStateFlower,
  sizesImagesInitialState,
  sizesInitialState,
  sizesNameChoices,
} from '@/app/data/flowers';
import {
  Flower,
  FlowerDemo,
  FlowerSizeDemo,
  FlowerSizeImageDemo,
} from '@/app/types/flowers';
import SelectField from '@/app/components/forms/SelectField';
import InputField from '@/app/components/forms/InputField';
import RadioField from '@/app/components/forms/RadioField';
import CheckboxField from '@/app/components/forms/CheckboxField';
import TextField from '@/app/components/forms/TextField';
import OptionField from '@/app/components/forms/OptionField';
import NumberField from '@/app/components/forms/NumberField';
import { useSearchParams, useRouter } from 'next/navigation';
import styles from '@/app/styles/FlowerForm.module.sass';
import { AiOutlineDelete, AiFillPlusCircle } from 'react-icons/ai';
import { prefix } from '../../utils/prefix';

type Props = {
  name: string;
  data: {
    payload: Flower[];
  };
};

const url = prefix();

const getFlower = async (id: string) => {
  try {
    const res = await fetch(`${url.url.API_URL}/admin/list/${id}/api`, {
      cache: 'no-store',
    });
    return res.ok ? await res.json() : { error: 'not found' };
  } catch (error) {
    const err = error as Error;
    return { error: err.message };
  }
};

const FlowerForm = ({ name, data }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [flower, setFlower] = useState(initialStateFlower);
  const [isSubmit, setIsSubmit] = useState(false);
  // blooms state
  const [blooms, setBlooms] = useState<string[]>(['']);
  const [addBlooms, setAddBlooms] = useState<string[]>(['']);
  const [bloomList, setBloomList] = useState<string[]>([]);
  // color state
  const [colors, setColors] = useState<string[]>(['']);
  const [addColors, setAddColors] = useState<string[]>(['']);
  const [colorList, setColorList] = useState<string[]>([]);
  // occasion state
  const [occasions, setOccasions] = useState<string[]>(['']);
  const [addOccasions, setAddOccasions] = useState<string[]>(['']);
  const [occasionList, setOccasionList] = useState<string[]>([]);

  // sizes state
  const [sizes, setSizes] = useState<FlowerSizeDemo[]>([sizesInitialState]);
  const [addSizes, setAddSizes] = useState<FlowerSizeDemo[]>([
    sizesInitialState,
  ]);

  // errors
  const [bloomError, setBloomError] = useState('');
  const [colorError, setColorError] = useState('');
  const [bouquetNameError, setBouquetNameError] = useState('');
  const [deliveryMethodError, setDeliveryMethodError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [occasionError, setOccasionError] = useState('');
  const [promoImgError, setPromoImgError] = useState('');
  const [sizesError, setSizesError] = useState<
    { name: string; index: number; subIndex?: number }[]
  >([]);

  // field
  // state updates
  const updateState = (arr: any, index: number, val: any, setArr: any) => {
    const data = [...arr];
    data[index] = val;
    setArr(data);
  };
  const addState = (arr: any, setArr: any) => {
    let newField = '';
    setArr([...arr, newField]);
  };
  const removeState = (arr: any, index: number, setArr: any) => {
    let data = [...arr];
    data.splice(index, 1);
    setArr(data);
  };
  // element updates
  const addField = (e: any, category: string) => {
    e.preventDefault();
    if (category === 'blooms') {
      addState(blooms, setBlooms);
    }
    if (category === 'addBlooms') {
      addState(addBlooms, setAddBlooms);
    }
    if (category === 'colors') {
      addState(colors, setColors);
    }
    if (category === 'addColors') {
      addState(addColors, setAddColors);
    }
    if (category === 'occasions') {
      addState(occasions, setOccasions);
    }
    if (category === 'addOccasions') {
      addState(addOccasions, setAddOccasions);
    }
  };
  const removeField = (e: any, category: string, index: number) => {
    e.preventDefault();

    if (category === 'blooms') {
      removeState(blooms, index, setBlooms);
    }
    if (category === 'addBlooms') {
      removeState(addBlooms, index, setAddBlooms);
    }
    if (category === 'colors') {
      removeState(colors, index, setColors);
    }
    if (category === 'addColors') {
      removeState(addColors, index, setAddColors);
    }
    if (category === 'occasions') {
      removeState(occasions, index, setOccasions);
    }
    if (category === 'addOccasions') {
      removeState(addOccasions, index, setAddOccasions);
    }
  };

  // group
  // element updates
  const addGroup = (e: any, category: string, index?: number) => {
    e.preventDefault();
    if (category === 'sizes') {
      let newSize = {
        name: '',
        quantity: 1,
        price: 0,
        height: 0,
        width: 0,
        images: [
          {
            hero: '',
            thumbnail: '',
          },
        ],
      };
      let newArr = [...sizes, newSize];
      setSizes(newArr);
    }
    if (category === 'sizesImg') {
      setSizes((prev) => {
        let newEntry = prev.map((flo, i) => {
          if (i === index) {
            flo = {
              ...flo,
              images: [...flo.images, sizesImagesInitialState],
            };
          }
          return flo;
        });
        return newEntry;
      });
      // setFlower((prev) => {});
    }
  };
  const removeGroup = (
    e: any,
    category: string,
    index: number,
    subIndex?: number
  ) => {
    e.preventDefault();
    if (category === 'sizes') {
      let data = [...sizes];
      data.splice(index, 1);
      setSizes(data);
    }
    if (category === 'sizesImg') {
      let data = [...sizes];
      data[index].images.splice(subIndex!, 1);
      setSizes(data);
    }
  };

  // changes
  const handleChange = (e: any, category: string, index: number) => {
    if (category === 'blooms') {
      updateState(blooms, index, e.target.value, setBlooms);
    }
    if (category === 'addBlooms') {
      updateState(addBlooms, index, e.target.value, setAddBlooms);
    }
    if (category === 'colors') {
      updateState(colors, index, e.target.value, setColors);
    }
    if (category === 'addColors') {
      updateState(addColors, index, e.target.value, setAddColors);
    }
    if (category === 'occasions') {
      updateState(occasions, index, e.target.value, setOccasions);
    }
    if (category === 'addOccasions') {
      updateState(addOccasions, index, e.target.value, setAddOccasions);
    }
  };

  const handleRadioChange = (e: any) => {
    let soldout = false;
    let limited = false;
    let full = false;

    if (e.target.value === 'isSoldOut') {
      soldout = true;
      limited = false;
      full = false;
    }
    if (e.target.value === 'isLimited') {
      soldout = false;
      limited = true;
      full = false;
    }
    if (e.target.value === 'isFull') {
      soldout = false;
      limited = false;
      full = true;
    }

    setFlower((prev) => {
      let newEntry = {
        ...prev,
        isAvailable: {
          isSoldOut: soldout,
          isLimited: limited,
          isFull: full,
        },
      };
      return newEntry;
    });
  };

  const handleCheckboxChange = (category: string) => {
    if (category === 'isBouquet') {
      setFlower((prev) => {
        let newEntry = {
          ...prev,
          bouquetDetails: {
            ...prev.bouquetDetails,
            isBouquet: !prev.bouquetDetails.isBouquet,
          },
        };
        return newEntry;
      });
    }
    if (category === 'isSale') {
      setFlower((prev) => {
        let newEntry = {
          ...prev,
          sale: {
            ...prev.sale,
            isSale: !prev.sale.isSale,
          },
        };
        return newEntry;
      });
    }
  };

  const handleTextChange = (
    e: any,
    category: string,
    index?: number,
    subIndex?: number
  ) => {
    if (category === 'bouquetName') {
      e.target.value.length && setBouquetNameError('');
      setFlower((prev) => {
        let newEntry = {
          ...prev,
          bouquetDetails: {
            ...prev.bouquetDetails,
            name: e.target.value,
          },
        };
        return newEntry;
      });
    }
    if (category === 'description') {
      e.target.value.length && setDescriptionError('');
      setFlower((prev) => {
        let newEntry = {
          ...prev,
          description: e.target.value,
        };
        return newEntry;
      });
    }
    if (category === 'promoImg') {
      e.target.value.length && setPromoImgError('');
      setFlower((prev) => {
        let newEntry = {
          ...prev,
          promoImg: e.target.value,
        };
        return newEntry;
      });
    }
    if (category === 'hero') {
      let newSize = sizes.map((flo, i) => {
        if (i === index) {
          let imgFloArr: { hero: string; thumbnail: string }[] = [];

          flo.images.forEach((f, ind) => {
            if (ind === subIndex) {
              let newHero = {
                ...f,
                hero: e.target.value,
              };
              imgFloArr.push(newHero);
            } else {
              imgFloArr.push(f);
            }
          });
          flo.images = imgFloArr;
        }
        return flo;
      });
      setFlower((prev: FlowerDemo) => {
        let newFlower = {
          ...prev,
          sizes: [...newSize],
        };
        return newFlower;
      });
    }
    if (category === 'thumbnail') {
      let newSize = sizes.map((flo, i) => {
        if (i === index) {
          let imgFloArr: { hero: string; thumbnail: string }[] = [];

          flo.images.forEach((f, ind) => {
            if (ind === subIndex) {
              let newHero = {
                ...f,
                thumbnail: e.target.value,
              };
              imgFloArr.push(newHero);
            } else {
              imgFloArr.push(f);
            }
          });
          flo.images = imgFloArr;
        }
        return flo;
      });
      setFlower((prev: FlowerDemo) => {
        let newFlower = {
          ...prev,
          sizes: [...newSize],
        };
        return newFlower;
      });
    }
  };

  const handleOptionChange = (e: any, category: string, index?: number) => {
    if (category === 'deliveryMethod') {
      setFlower((prev) => {
        let newEntry = {
          ...prev,
          delivery: {
            ...prev.delivery,
            method: e.target.value,
          },
        };
        return newEntry;
      });
    }
    if (category === 'name') {
      let newFlower = sizes.map((flo, i) => {
        if (i === index) {
          let newName = {
            ...flo,
            name: e.target.value,
          };
          return newName;
        } else {
          return flo;
        }
      });
      setSizes(newFlower);
      setFlower((prev: FlowerDemo) => {
        let newEntry: FlowerDemo = {
          ...prev,
          sizes: newFlower,
        };
        return newEntry;
      });
    }
  };

  const handleNumberChange = (e: any, category: string, index?: number) => {
    if (category === 'deliveryDate') {
      setFlower((prev) => {
        let newEntry = {
          ...prev,
          delivery: {
            ...prev.delivery,
            date: Number(e.target.value),
          },
        };
        return newEntry;
      });
    }
    if (category === 'discount') {
      setFlower((prev) => {
        let newEntry = {
          ...prev,
          sale: {
            ...prev.sale,
            discount: Number(e.target.value),
          },
        };
        return newEntry;
      });
    }
    if (category === 'quantity') {
      let newFlower = sizes.map((flo, i) => {
        if (i === index) {
          let newFlo = {
            ...flo,
            quantity: Number(e.target.value),
          };
          return newFlo;
        } else {
          return flo;
        }
      });
      setSizes(newFlower);
      setFlower((prev: FlowerDemo) => {
        let newEntry = {
          ...prev,
          sizes: newFlower,
        };
        return newEntry;
      });
    }
    if (category === 'price') {
      let newFlower = sizes.map((flo, i) => {
        if (i === index) {
          let newFlo = {
            ...flo,
            price: Number(e.target.value),
          };
          return newFlo;
        } else {
          return flo;
        }
      });
      setSizes(newFlower);
      setFlower((prev: FlowerDemo) => {
        let newEntry = {
          ...prev,
          sizes: newFlower,
        };
        return newEntry;
      });
    }
    if (category === 'height') {
      let newFlower = sizes.map((flo, i) => {
        if (i === index) {
          let newFlo = {
            ...flo,
            height: Number(e.target.value),
          };
          return newFlo;
        } else {
          return flo;
        }
      });
      setSizes(newFlower);
      setFlower((prev: FlowerDemo) => {
        let newEntry = {
          ...prev,
          sizes: newFlower,
        };
        return newEntry;
      });
    }
    if (category === 'width') {
      let newFlower = sizes.map((flo, i) => {
        if (i === index) {
          let newFlo = {
            ...flo,
            width: Number(e.target.value),
          };
          return newFlo;
        } else {
          return flo;
        }
      });
      setSizes(newFlower);
      setFlower((prev: FlowerDemo) => {
        let newEntry = {
          ...prev,
          sizes: newFlower,
        };
        return newEntry;
      });
    }
  };

  // form sanitation
  const checkStringArray = (arr: string[]) => {
    let newArr = arr.filter((n) => n).map((n) => n.trim());
    return newArr.reduce((acc: string[], val) => {
      !acc.includes(val) && acc.push(val);
      return acc;
    }, []);
  };
  const checkString = (str: string) => {
    return str.trim();
  };
  const checkSizesArray = (arr: FlowerSizeDemo[]) => {
    let errs: { name: string; index: number; subIndex?: number }[] = [];
    arr.forEach((a, i) => {
      let ar: FlowerSizeDemo = a;
      for (const key in ar) {
        if (typeof ar[key as keyof typeof ar] === 'string') {
          let str: string = ar[key as keyof typeof ar] as string;
          !str.length && errs.push({ name: key, index: i });
        }

        if (typeof ar[key as keyof typeof ar] === 'number') {
          let num: number = ar[key as keyof typeof ar] as number;
          num < 1 && errs.push({ name: key, index: i });
        }

        if (typeof ar[key as keyof typeof ar] === 'object') {
          let imagesArr: FlowerSizeImageDemo[] = ar[
            key as keyof typeof ar
          ] as FlowerSizeImageDemo[];
          imagesArr.forEach((im, ind) => {
            !im.hero.length &&
              errs.push({ name: 'hero', index: i, subIndex: ind });

            !im.thumbnail.length &&
              errs.push({ name: 'thumbnail', index: i, subIndex: ind });
          });
        }
      }
    });
    setSizesError([...errs]);
    return errs;
  };

  // form value integration
  const inputValues = () => {
    // blooms
    const combinedBloomVals = checkStringArray([...blooms, ...addBlooms]);
    if (combinedBloomVals.length) {
      setFlower((prev) => {
        let newEntry = {
          ...prev,
          bouquetDetails: {
            ...prev.bouquetDetails,
            bloom: combinedBloomVals,
          },
        };
        return newEntry;
      });
      setBloomError('');
    } else {
      setBloomError('please fill field');
    }

    // colors
    const combinedColorVals = checkStringArray([...colors, ...addColors]);
    if (combinedColorVals.length) {
      setFlower((prev) => {
        let newEntry = {
          ...prev,
          bouquetDetails: {
            ...prev.bouquetDetails,
            color: combinedColorVals,
          },
        };
        return newEntry;
      });
      setColorError('');
    } else {
      setColorError('please fill field');
    }

    // occasions
    const combinedOccasionVals = checkStringArray([
      ...occasions,
      ...addOccasions,
    ]);
    if (combinedOccasionVals.length) {
      setFlower((prev) => {
        let newEntry = {
          ...prev,
          occasion: combinedOccasionVals,
        };
        return newEntry;
      });
      setOccasionError('');
    } else {
      setOccasionError('please fill field');
    }

    // bouquet name
    const bouquetNameVal = checkString(flower.bouquetDetails.name);
    !bouquetNameVal && setBouquetNameError('please fill field');

    // delivery method
    const deliveryMethodVal = checkString(flower.delivery.method);
    !deliveryMethodVal && setDeliveryMethodError('please fill field');

    // description
    const descriptionVal = checkString(flower.description);
    !descriptionVal && setDescriptionError('please fill field');

    // promoimg
    const promoimgVal = checkString(flower.promoImg);
    !promoimgVal && setPromoImgError('please fill field');

    // sizes
    const sizesArr = checkSizesArray(sizes);
    if (!sizesArr.length) {
      setFlower((prev) => {
        let newEntry = {
          ...prev,
          sizes: sizes,
        };
        return newEntry;
      });
    }
  };

  const checkFormErrors = useCallback(() => {
    let arr = [
      bloomError,
      colorError,
      bouquetNameError,
      deliveryMethodError,
      occasionError,
      promoImgError,
      sizesError,
    ];

    if (arr.every((x) => !x.length)) {
      if (name === 'create') {
        const postRequest = async () => {
          try {
            const res = await fetch(`${url.url.API_URL}/admin/create/api`, {
              method: 'POST',
              cache: 'no-store',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(flower),
            });

            if (res.ok) {
              resetVals();
              window.confirm('Flower successfully saved');
              router.push('/admin');
              location.reload();
            } else {
              window.confirm('Unable to save');
            }
          } catch (error) {
            const err = error as Error;
            window.confirm(err.message);
          }
        };
        postRequest();
      }
      if (name === 'edit') {
        const putRequest = async () => {
          try {
            const flo = flower as any;
            const res = await fetch(`${url.url.API_URL}/admin/edit/api`, {
              method: 'PUT',
              cache: 'no-store',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id: flo._id, payload: flower }),
            });
            if (res.ok) {
              resetVals();
              window.confirm('Flower successfully saved');
              router.push('/admin');
            } else {
              window.confirm('Unable to save');
            }
          } catch (error) {
            const err = error as Error;
            window.confirm(err.message);
          }
        };
        putRequest();
      }
    }
    setIsSubmit(false);
  }, [
    bloomError,
    colorError,
    bouquetNameError,
    deliveryMethodError,
    occasionError,
    promoImgError,
    sizesError,
    flower,
    router,
    name,
  ]);

  // form value reset
  const resetVals = () => {
    setFlower(initialStateFlower);
    setBlooms(['']);
    setAddBlooms(['']);
    setColors(['']);
    setAddColors(['']);
    setOccasions(['']);
    setAddOccasions(['']);
    setSizes([sizesInitialState]);
    setAddSizes([sizesInitialState]);

    setBloomError('');
    setColorError('');
    setBouquetNameError('');
    setDeliveryMethodError('');
    setDescriptionError('');
    setOccasionError('');
    setPromoImgError('');
    setSizesError([]);
  };

  // form submission
  const onSubmit = (e: any) => {
    e.preventDefault();
    inputValues();
    setIsSubmit(true);
  };

  // lists for drop down from existing values
  useEffect(() => {
    let bloomArr: string[] = [];
    let colorArr: string[] = [];
    let occasionArr: string[] = [];

    data.payload.forEach((item) => {
      item.bouquetDetails.bloom.forEach((b) => {
        if (!bloomArr.includes(b)) {
          bloomArr.push(b);
        }
      });
      item.bouquetDetails.color.forEach((c) => {
        if (!colorArr.includes(c)) {
          colorArr.push(c);
        }
      });
      item.occasion.forEach((o) => {
        if (!occasionArr.includes(o)) {
          occasionArr.push(o);
        }
      });
    });
    setBloomList(bloomArr.sort());
    setColorList(colorArr.sort());
    setOccasionList(occasionArr.sort());
  }, [data]);

  useEffect(() => {
    isSubmit && checkFormErrors();
  }, [isSubmit, checkFormErrors]);

  // useEffect(() => {
  //   console.log({ flower });
  // }, [flower]);

  useEffect(() => {
    // form orientation
    if (name === 'edit') {
      let id = searchParams.toString();
      getFlower(id)
        .then((res) => {
          let data: FlowerDemo = res.payload;
          data = {
            ...data,
            bouquetDetails: {
              ...data.bouquetDetails,
              name: data.bouquetDetails.name[0],
            },
          };
          setBlooms(data.bouquetDetails.bloom);
          setColors(data.bouquetDetails.color);
          setOccasions(data.occasion);
          setSizes(data.sizes);
          setFlower(data);
        })
        .catch((e) => {
          console.log({ e });
        });
    }
  }, [name, searchParams]);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{name} flower</h1>
      <form onSubmit={(e) => onSubmit(e)} className={styles.form}>
        <h1 className={styles.groupHeader}>bouquet details</h1>
        <div className={`${styles.formGroup} ${styles.bouquetName}`}>
          <TextField
            name="bouquetName"
            text="name"
            val={flower.bouquetDetails.name}
            handleTextChange={handleTextChange}
          />
          {bouquetNameError && <small>{bouquetNameError}</small>}
        </div>
        <div className={`${styles.formGroup} ${styles.isBouquet}`}>
          <CheckboxField
            name="isBouquet"
            text="is this a bouquet"
            obj={flower.bouquetDetails.isBouquet}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
        <hr />
        <h1 className={styles.groupHeader}>bloom details</h1>
        <div className={`${styles.formGroup} ${styles.bloom}`}>
          <h2>blooms</h2>
          <SelectField
            arr={blooms}
            name="bloom"
            text="bloom"
            category="blooms"
            stateList={bloomList}
            handleChange={handleChange}
            removeField={removeField}
            addField={addField}
          />
          <h2>additional blooms?</h2>
          <InputField
            arr={addBlooms}
            name="bloom"
            text="bloom"
            type="text"
            category="addBlooms"
            handleChange={handleChange}
            removeField={removeField}
            addField={addField}
          />
          {bloomError && <small>{bloomError}</small>}
        </div>
        <hr></hr>
        <h1 className={styles.groupHeader}>color details</h1>
        <div className={`${styles.formGroup} ${styles.color}`}>
          <h2>color</h2>
          <SelectField
            arr={colors}
            name="color"
            text="color"
            category="colors"
            stateList={colorList}
            handleChange={handleChange}
            removeField={removeField}
            addField={addField}
          />
          <h2>additional colors?</h2>
          <InputField
            arr={addColors}
            name="color"
            text="color"
            type="text"
            category="addColors"
            handleChange={handleChange}
            removeField={removeField}
            addField={addField}
          />
          {colorError && <small>{colorError}</small>}
        </div>
        <hr />
        <h1 className={styles.groupHeader}>delivery details</h1>
        <div className={`${styles.formGroup} ${styles.deliveryMethod}`}>
          <OptionField
            name="deliveryMethod"
            text="method"
            val={flower.delivery.method}
            optionList={deliveryMethodChoices}
            handleOptionChange={handleOptionChange}
          />
          {deliveryMethodError && <small>{deliveryMethodError}</small>}
        </div>
        <div className={`${styles.formGroup} ${styles.deliveryDate}`}>
          <NumberField
            name="deliveryDate"
            text="date"
            val={flower.delivery.date}
            handleNumberChange={handleNumberChange}
          />
        </div>
        <hr />
        <h1 className={styles.groupHeader}>description details</h1>
        <div className={`${styles.formGroup} ${styles.description}`}>
          <TextField
            name="description"
            text="description"
            val={flower.description}
            handleTextChange={handleTextChange}
          />
          {descriptionError && <small>{descriptionError}</small>}
        </div>
        <hr />
        <h1 className={styles.groupHeader}>availability details</h1>
        <div className={`${styles.formGroup} ${styles.availability}`}>
          {availabilityChoices.map(({ id, name, text, value }) => (
            <RadioField
              key={id}
              name={name}
              value={value}
              text={text}
              handleRadioChange={handleRadioChange}
            />
          ))}
        </div>
        <hr />
        <h1 className={styles.groupHeader}>occasion details</h1>
        <div className={`${styles.formGroup} ${styles.occasion}`}>
          <div>
            <h2>occasions</h2>
            <SelectField
              arr={occasions}
              name="occasion"
              text="occasion"
              category="occasions"
              stateList={occasionList}
              handleChange={handleChange}
              removeField={removeField}
              addField={addField}
            />
            <h2>additional occasions?</h2>
            <InputField
              arr={addOccasions}
              name="occasion"
              text="occasion"
              type="text"
              category="addOccasions"
              handleChange={handleChange}
              removeField={removeField}
              addField={addField}
            />
            {occasionError && <small>{occasionError}</small>}
          </div>
        </div>
        <hr />
        <h1 className={styles.groupHeader}>image details</h1>
        <div className={`${styles.formGroup} ${styles.promoImg}`}>
          <TextField
            name="promoImg"
            text="promo image"
            val={flower.promoImg}
            handleTextChange={handleTextChange}
          />
          {promoImgError && <small>{promoImgError}</small>}
        </div>
        <hr />
        <h1 className={styles.groupHeader}>sale details</h1>
        <div className={`${styles.formGroup} ${styles.isSale}`}>
          <CheckboxField
            name="isSale"
            text="is this a sale item?"
            obj={flower.sale.isSale}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
        <div className={`${styles.formGroup} ${styles.saleDiscount}`}>
          <NumberField
            name="discount"
            text="discount"
            val={flower.sale.discount}
            handleNumberChange={handleNumberChange}
          />
        </div>
        <hr />
        <h1 className={styles.groupHeader}>side details </h1>
        <button
          onClick={(e) => addGroup(e, 'sizes')}
          className={styles.sizeBtn}
        >
          <p>Add size?</p>
          <AiFillPlusCircle fontSize={25} fill="green" />
        </button>
        <div className={`${styles.formGroup} ${styles.sizes}`}>
          <div className={styles.sizesContainer}>
            {sizes.map((s: FlowerSizeDemo, i: number) => (
              <div key={i}>
                {/* NAME of the size */}
                <OptionField
                  name="name"
                  text="name"
                  val={sizes[i].name}
                  optionList={sizesNameChoices}
                  handleOptionChange={(e) => handleOptionChange(e, 'name', i)}
                />
                {sizesError.filter((x) => x.name === 'name' && x.index === i)
                  .length ? (
                  <small>please fill field</small>
                ) : null}

                {/* QUANTITY of the size */}
                <NumberField
                  name="quantity"
                  text="quantity"
                  val={sizes[i].quantity}
                  handleNumberChange={(e) =>
                    handleNumberChange(e, 'quantity', i)
                  }
                />
                {sizesError.filter(
                  (x) => x.name === 'quantity' && x.index === i
                ).length ? (
                  <small>please fill field</small>
                ) : null}

                {/* PRICE of the size */}
                <NumberField
                  name="price"
                  text="price"
                  val={sizes[i].price}
                  handleNumberChange={(e) => handleNumberChange(e, 'price', i)}
                />
                {sizesError.filter((x) => x.name === 'price' && x.index === i)
                  .length ? (
                  <small>please fill field</small>
                ) : null}

                {/* HEIGHT of the size */}
                <NumberField
                  name="height"
                  text="height"
                  val={sizes[i].height}
                  handleNumberChange={(e) => handleNumberChange(e, 'height', i)}
                />
                {sizesError.filter((x) => x.name === 'height' && x.index === i)
                  .length ? (
                  <small>please fill field</small>
                ) : null}

                {/* WIDTH of the size */}
                <NumberField
                  name="width"
                  text="width"
                  val={sizes[i].width}
                  handleNumberChange={(e) => handleNumberChange(e, 'width', i)}
                />
                {sizesError.filter((x) => x.name === 'width' && x.index === i)
                  .length ? (
                  <small>please fill field</small>
                ) : null}

                {/* IMAGES for the size */}
                <h3>image details </h3>
                <div>
                  <button
                    className={styles.sizeBtn}
                    onClick={(e) => addGroup(e, 'sizesImg', i)}
                  >
                    <p>Add Image?</p>
                    <AiFillPlusCircle fontSize={25} fill="green" />
                  </button>
                  {sizes[i].images.map(
                    (simg: FlowerSizeImageDemo, index: number) => (
                      <div key={index}>
                        {/* HERO IMAGE for the size */}
                        <TextField
                          name="hero"
                          text="hero"
                          val={sizes[i].images[index].hero}
                          handleTextChange={(e) =>
                            handleTextChange(e, 'hero', i, index)
                          }
                        />
                        {sizesError.filter(
                          (x) =>
                            x.name === 'hero' &&
                            x.index === i &&
                            x.subIndex! === index
                        ).length ? (
                          <small>please fill field</small>
                        ) : null}

                        {/* THUMBNAIL IMAGE of the size */}
                        <TextField
                          name="thumbnail"
                          text="thumbnail"
                          val={sizes[i].images[index].thumbnail}
                          handleTextChange={(e) =>
                            handleTextChange(e, 'thumbnail', i, index)
                          }
                        />
                        {sizesError.filter(
                          (x) =>
                            x.name === 'thumbnail' &&
                            x.index === i &&
                            x.subIndex! === index
                        ).length ? (
                          <small>please fill field</small>
                        ) : null}
                        <div>
                          <button
                            className={styles.sizeBtn}
                            onClick={(e) =>
                              removeGroup(e, 'sizesImg', i, index)
                            }
                          >
                            <p>Remove Image?</p>
                            <AiOutlineDelete fontSize={25} fill="#ff0000" />
                          </button>
                        </div>
                        <hr />
                      </div>
                    )
                  )}
                </div>
                <button
                  className={styles.sizeBtn}
                  onClick={(e) => removeGroup(e, 'sizes', i)}
                >
                  <p>Remove Size?</p>
                  <AiOutlineDelete fontSize={25} fill="#ff0000" />
                </button>
                <hr />
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className={styles.submitContainer}>
          <input type="submit" value="save" />
        </div>
      </form>
    </div>
  );
};

export default FlowerForm;
