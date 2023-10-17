import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';

export class OptionalParseEnumPipe<T = any> extends ParseEnumPipe<T> {
  override transform(value: T, metadata: ArgumentMetadata): Promise<T> {
    return typeof value === 'undefined'
      ? undefined
      : super.transform(value, metadata);
  }
}
